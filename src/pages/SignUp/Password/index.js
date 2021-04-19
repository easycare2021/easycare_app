import React, { createRef, useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch } from 'react-redux';
import { alertError } from '~/utils/alert';
import * as types from '~/reducers/types';
import BaseInput from '~/components/BaseInput';
import { EyeIcon, EyeIconSlash } from '~/assets/index';

const Password = ({ navigation }) => {

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const inputRefPassword = createRef();
  const inputRefConfirmPassword = createRef();

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
      <Title>Agora vamos criar uma senha.</Title>
      <BaseInput
        label="Senha"
        placeholder="sua senha"
        onChangeText={(text) => setPassword(text)}
        icon={showPassword ? EyeIconSlash : EyeIcon}
        secureTextEntry={showPassword}
        ref={inputRefPassword}
        text={password}
        handlePress={() => setShowPassword(!showPassword)}
      />
      <BaseInput
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        onChangeText={(text) => setConfirm(text)}
        icon={showPassword ? EyeIconSlash : EyeIcon}
        secureTextEntry={showPassword}
        ref={inputRefConfirmPassword}
        text={confirm}
        handlePress={() => setShowPassword(!showPassword)}
      />
    </Base>
  );
};

export default Password;
