import React, { useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { alertError } from '~/utils/alert';
import * as types from '~/reducers/types';
import UserService from '~/services/UserService';
import BaseInput from '~/components/BaseInput';
import { MMKV } from 'react-native-mmkv';

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

      MMKV.set('user_id', response.id);
      dispatch({
        type: types.ADD_CAREGIVER,
        payload: {
          user_id: response.id,
        },
      });

      setLoading(false);
      navigation.navigate('Document');
    }).catch(err => {
      console.log(err);
      alertError('Erro ao cadastrar nome');
      setLoading(false);
      return err;
    });
  };

  return (
    <Base nextStep={nextStep} loading={loading}>
      <Title>Informe seu nome completo.</Title>
      <BaseInput
        label="Nome completo"
        placeholder="Easycare"
        onChangeText={(text) => setName(text)}
        autoCompleteType="name"
      />
    </Base>
  );
};

export default Name;
