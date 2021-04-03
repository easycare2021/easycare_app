import React, { useState } from 'react';
import Base from '../Base';
import { Title } from '../styles';
import { useDispatch } from 'react-redux';
import { alertError } from '../../../utils/alert';
import * as types from '../../../reducers/types';
import BaseTextInputMasked from '../../../components/BaseTextInputMasked';

const Phone = ({ navigation }) => {

  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const nextStep = () => {


    if (!phone) {

      alertError('Insira um numéro de telefone!');
      return;
    }

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        phone_number: phone,
      },
    });

    navigation.navigate('Photo');
  };

  return (
    <Base nextStep={nextStep}>
      <Title>Informe seu número de celular.</Title>
      <BaseTextInputMasked
        mask={'([00]) [00000]-[0000]'}
        keyboardType="numeric"
        onChangeText={(text) => setPhone(text)}
      />
    </Base>
  );
};

export default Phone;
