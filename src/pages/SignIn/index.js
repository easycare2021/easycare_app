import React, { useState, useEffect } from 'react';
import {
  Container,
  IconContainer,
  Icon,
  TextIcon,
  InputContainer,
  SignInButton,
  SignInText,
  ForgotPassword,
  Loading,
} from './styles';
import { EasycareDefaultImage } from '../../assets';
import BaseTextInput from '../../components/BaseTextInput';
import UserService from '../../services/UserService';
import { MMKV } from 'react-native-mmkv';
import FingerprintScannerService from '../../services/FingerprintScannerService';
import { Keyboard } from 'react-native';
import { alertError } from '../../utils/alert';

const SignIn = ({ navigation }) => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

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
        <Icon source={EasycareDefaultImage} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>

      <InputContainer>
        <BaseTextInput label="email" onChangeText={(text) => setUser({ ...user, email: text })} />
        <BaseTextInput label="password" onChangeText={(text) => setUser({ ...user, password: text })} secureTextEntry />
        <ForgotPassword>forgot password?</ForgotPassword>
      </InputContainer>

      <SignInButton onStartShouldSetResponder={auth} keyboardIsOpen={keyboardIsOpen}>
        <SignInText>sign in</SignInText>
        {loading && <Loading color="white" />}
      </SignInButton>
    </Container>
  );
};

export default SignIn;
