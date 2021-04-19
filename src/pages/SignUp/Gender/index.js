import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  GenderContainer,
  GenderIconContainer,
  GenderIconMale,
  GenderDescription,
  GenderIconFemale,
  Other,
  TitleContainer,
} from './styles';
import { alertError } from '~/utils/alert';
import * as types from '~/reducers/types';
import { FemaleAvatarImage, MaleAvatarImage } from '~/assets';
import CaregiverService from '~/services/CaregiverService';
import { useDispatch, useSelector } from 'react-redux';
import { BackHandler, TouchableOpacity } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import Base from '../Base';
import { deleteAllKeys } from '~/utils/mmkv';

const Gender = ({ navigation }) => {

  const [gender, setGender] = useState('');

  const [selectedMale, setSelectedMale] = useState(false);
  const [selectedFemale, setSelectedFemale] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { caregiver } = useSelector(state => ({ caregiver: state.caregiver }));

  const caregiverService = new CaregiverService();

  useEffect(() => {

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        gender,
      },
    });

    const backAction = () => {
      navigation.navigate('Photo');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();

  }, [dispatch, gender, navigation]);

  const createCaregiver = async () => {

    if (!gender) {

      alertError('Selecione um gênero');
      return;
    }

    setLoading(true);

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        gender,
      },
    });

    await caregiverService.store(caregiver).then((response) => {

      setLoading(false);
      deleteAllKeys();

      MMKV.set('caregiverID', response.id);
      navigation.navigate('SignIn');
    }).catch(err => {

      console.error(err);
      setLoading(false);
    });
  };

  return (
    <Base loading={loading} nextStep={createCaregiver} text="Finalizar">
      <Container>
        <TitleContainer>
          <Title>Olá {caregiver.name},</Title>
          <Subtitle>Precisamos que informe seu gênero</Subtitle>
        </TitleContainer>
        <GenderContainer>
          <GenderIconContainer>
            <TouchableOpacity onPress={() => { setGender('Male'); setSelectedMale(true); setSelectedFemale(false); }}>
              <GenderIconMale source={MaleAvatarImage} selectedMale={selectedMale} />
            </TouchableOpacity>
            <GenderDescription>Masculino</GenderDescription>
          </GenderIconContainer>
          <GenderIconContainer>
            <TouchableOpacity onPress={() => { setGender('Female'); setSelectedFemale(true); setSelectedMale(false); }}>
              <GenderIconFemale source={FemaleAvatarImage} selectedFemale={selectedFemale} />
            </TouchableOpacity>
            <GenderDescription>Feminino</GenderDescription>
          </GenderIconContainer>
        </GenderContainer>
        <Other onPress={() => { setGender('Other'); createCaregiver(); }}>Prefiro não dizer</Other>
      </Container>
    </Base>
  );
};

export default Gender;
