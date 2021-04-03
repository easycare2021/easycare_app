import React, { useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { alertError } from '../../../utils/alert';
import * as types from '../../../reducers/types';
import BaseTextInput from '../../../components/BaseTextInput';
import UserService from '../../../services/UserService';

const Name = ({ navigation }) => {

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector(state => ({ user: state.user }));

  const userService = new UserService();

  const nextStep = async () => {

    if (!name) {

      alertError('Insira um nome!');
      return;
    }

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        name,
      },
    });

    setLoading(true);

    await userService.store(user).then(response => {

      dispatch({
        type: types.ADD_CAREGIVER,
        payload: {
          user_id: response.id,
        },
      });

      setLoading(false);
      navigation.navigate('Document');
    }).catch(err => {

      alertError('Erro ao cadastrar nome');
      setLoading(false);
      return err;
    });
  };

  return (
    <Base nextStep={nextStep} loading={loading}>
      <Title>Informe seu nome completo.</Title>
      <BaseTextInput placeholder="Nome Completo" onChangeText={(text) => setName(text)} />
    </Base>
  );
};

export default Name;
