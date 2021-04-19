import React, { useEffect, useState, createRef } from 'react';
import {
    Container,
    FormContainer,
    Icon,
    IconContainer,
    IconText,
    LoginContainer,
    Message,
    Title,
} from './styles.js';
import { EasycareLightImage } from '~/assets';
import BaseInput from '~/components/BaseInput';
import BaseButton from '~/components/BaseButton';
import { MMKV } from 'react-native-mmkv';
import FingerprintScannerService from '~/services/FingerprintScannerService';
import { Keyboard } from 'react-native';
import { alertError } from '~/utils/alert';
import UserService from '~/services/UserService';
import { EyeIcon, EyeIconSlash } from '~/assets/index.js';

const NewLogin = ({ navigation }) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const ref = createRef();

    useEffect(() => {

        const showTouchIDAuthentication = MMKV.getBoolean('showTouchIDAuthentication');

        if (showTouchIDAuthentication) {

            new FingerprintScannerService().authCurrent(navigation);
        }

        return () => {

            new FingerprintScannerService().release();
        };
    }, [navigation]);

    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        return () => {

            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = (e) => {

        setKeyboardHeight(e.endCoordinates.height);
        setKeyboardIsOpen(true);
        MMKV.set('keyboardIsOpen', true);
    };

    const _keyboardDidHide = () => {

        setKeyboardHeight(0);
        setKeyboardIsOpen(false);
        MMKV.set('keyboardIsOpen', false);
    };

    const auth = async () => {

        if (!user.password || !user.email) {

            alertError('Preencha todos os campos!');
            return;
        }

        const userService = new UserService();

        setLoading(true);

        await userService.auth(user).then((res) => {

            setLoading(false);
            MMKV.set('Authorization', res.token);
            navigation.navigate('TouchID');
        }).catch(err => {

            if (err.response && err.response.status === 401) {

                alertError('Email e/ou senha inválidos');
                setLoading(false);
                return;
            }
        });
    };

    return (
        <Container keyboardIsOpen={keyboardIsOpen} keyboardHeight={keyboardHeight}>
            <IconContainer keyboardIsOpen={keyboardIsOpen}>
                <Icon source={EasycareLightImage} keyboardIsOpen={keyboardIsOpen} />
                <IconText>easycare</IconText>
            </IconContainer>
            <LoginContainer keyboardIsOpen={keyboardIsOpen}>
                <Title>Entrar</Title>
                <FormContainer>
                    <BaseInput
                        label="Email"
                        placeholder="easycare@exemplo.com"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        onChangeText={email => setUser({ ...user, email })}
                    />
                    <BaseInput
                        label="Senha"
                        placeholder="sua senha"
                        autoCompleteType="off"
                        onChangeText={password => {
                            setUser({ ...user, password });
                        }}
                        secureTextEntry={showPassword}
                        icon={showPassword ? EyeIconSlash : EyeIcon}
                        ref={ref}
                        text={user.password}
                        handlePress={() => { setShowPassword(!showPassword); }}
                    />
                    <BaseButton
                        text="Entrar"
                        onPress={auth}
                        loading={loading}
                    />
                </FormContainer>
                <Message keyboardIsOpen={keyboardIsOpen}>Você não tem uma conta? Cadastre-se.</Message>
            </LoginContainer>
        </Container>
    );
};

export default NewLogin;
