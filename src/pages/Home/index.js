import React, { useEffect } from 'react';

import {
  Container,
  CardPatient,
  IconPatient,
  NamePatient,
  ViewLeft,
  CaseBpm,
  Heart,
  FrequencyContainer,
  Frequency,
  BPM,
  AddPatientContainer,
  Plus,
} from './styles';

import {
  PlusIcon,
  HomeBackgroundImage,
  OldManImage,
  HeartImage,
} from '~/assets';

import Header from '~/shared/Header';
import { Alert, BackHandler } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import TokenService from '~/services/TokenService';
import { MMKV } from 'react-native-mmkv';

const Home = ({ navigation }) => {
  const saveTokenToDatabase = async (token) => {
    const tokenService = new TokenService();
    tokenService.store(token).then(response => {
      console.log(response);
      if (response.exists) {
        return;
      }
    }).catch(err => console.log(err));
  };

  useEffect(() => {
      messaging().getToken().then(token => {
        saveTokenToDatabase({
          token: token,
          type: 'cloud messaging',
          is_revoked: false,
          user_id: MMKV.getNumber('user_id'),
        });
      });

      return messaging().onTokenRefresh(token => {
        saveTokenToDatabase({
          token: token,
          type: 'cloud messaging refresh',
          is_revoked: false,
          user_id: MMKV.getNumber('user_id'),
        });
      });
  });

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Você realmente deseja sair?', '', [
        {
          text: 'Não',
          onPress: () => { },
        },
        {
          text: 'Sim',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();

  }, []);

  return (
    <Container source={HomeBackgroundImage}>
      <Header navigation={navigation} />
      <CardPatient onPress={() => navigation.navigate('Patient')}>
        <IconPatient source={OldManImage} />
        <ViewLeft>
          <NamePatient>Adailton, 76</NamePatient>
          <CaseBpm>
            <Heart source={HeartImage} />
            <FrequencyContainer>
              <Frequency>74</Frequency>
              <BPM>BPM</BPM>
            </FrequencyContainer>
          </CaseBpm>
        </ViewLeft>
      </CardPatient>
      <AddPatientContainer onPress={() => {}}>
        <Plus source={PlusIcon}/>
      </AddPatientContainer>
    </Container>
  );
};

export default Home;
