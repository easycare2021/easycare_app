import React, { useState } from 'react';
import { InfoLabel, Title } from '../styles';
import Base from '../Base';
import { useDispatch } from 'react-redux';
import { alertError } from '~/utils/alert';
import * as types from '~/reducers/types';
import UserService from '~/services/UserService';
import BaseInput from '~/components/BaseInput';

const Username = ({ navigation }) => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);

    const userService = new UserService();

    const regex = /^[a-z0-9_-]{3,16}$/igm;

    const nextStep = async () => {

        if (!username) {

            alertError('Insira um nome de usuário!');
            return;
        }

        if (!username.match(regex)) {
            alertError('Insira um nome de usuário válido');
            return;
        }

        setLoading(true);

        await userService.usernameAlreadyExists(username).then((response) => {

            // user do not exists
            if (!response.exists) {

                dispatch({
                    type: types.ADD_USER,
                    payload: {
                        username,
                    },
                });

                setLoading(false);

                navigation.navigate('Email');
            } else {

                setLoading(false);
                alertError('Nome de usuário já cadastrado');
                return;
            }
        }).catch((err) => {

            alertError('Não foi possível continuar, tente novamente mais tarde.');
            console.error(err);
            setLoading(false);
        });
    };

    return (
        <Base nextStep={nextStep} loading={loading}>
            <Title>Primeiro vamos criar um nome de usuário.</Title>
            <InfoLabel>Não é possível colocar caracteres especiais.</InfoLabel>
            <BaseInput
                placeholder="easycare"
                autoCompleteType="username"
                onChangeText={(text) => setUsername(text)}
                label="Nome de usuário"
            />
        </Base>
    );
};

export default Username;
