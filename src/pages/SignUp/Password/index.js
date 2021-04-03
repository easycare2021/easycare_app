import React, { useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch } from 'react-redux';
import { alertError } from '../../../utils/alert';
import * as types from '../../../reducers/types';
import BaseTextInput from '../../../components/BaseTextInput';

const Password = ({ navigation }) => {

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const nextStep = async () => {

    if (!password || !confirm) {

      alertError('Preencha todos os campos!');
      return;
    }

    if (password !== confirm) {

      alertError('As senhas não conferem!');
      return;
    }

    dispatch({
      type: types.ADD_USER,
      payload: {
        password,
      },
    });

    navigation.navigate('Name');
  };

  return (
    <Base nextStep={nextStep}>
      <Title>Agora precisamos criar uma senha.</Title>
      <BaseTextInput placeholder="Senha" onChangeText={(text) => setPassword(text)} secureTextEntry />
      <BaseTextInput placeholder="Confirmar Senha" onChangeText={(text) => setConfirm(text)} secureTextEntry />
    </Base>
  );
};

export default Password;
