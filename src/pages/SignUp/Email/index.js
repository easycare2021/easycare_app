import React, { useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch } from 'react-redux';
import { alertError } from '../../../utils/alert';
import * as types from '../../../reducers/types';
import BaseTextInput from '../../../components/BaseTextInput';
import UserService from '../../../services/UserService';

const Email = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const userService = new UserService();

    const nextStep = async () => {

        if (!email) {

            alertError('Insira um email!');
            return;
        }

        setLoading(true);

        await userService.emailAlreadyExists(email).then(response => {

            if (!response.exists) {

                dispatch({
                    type: types.ADD_USER,
                    payload: {
                        email,
                    },
                });

                setLoading(false);

                navigation.navigate('Password');
            } else {

                setLoading(false);
                alertError('Este email já está sendo usado.');
                return;
            }
        }).catch(err => {

            setLoading(false);
            return err;
        });

    };

    return (
        <Base nextStep={nextStep} loading={loading}>
            <Title>Agora, precisamos do seu email.</Title>
            <BaseTextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
        </Base>
    );
};

export default Email;
