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
} from '../../assets';

import Header from '../../shared/Header';
import { BackHandler } from 'react-native';

const Home = ({ navigation }) => {

  useEffect(() => {

    const backAction = () => {

      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();

  }, [navigation]);
  return (
      <Container source={HomeBackgroundImage}>
        <Header navigation={navigation}/>
        <CardPatient onPress={() => navigation.navigate('Patient')}>
          <IconPatient source={OldManImage}/>
          <ViewLeft>
            <NamePatient>Adailton, 76</NamePatient>
            <CaseBpm>
              <Heart source={HeartImage}/>
              <FrequencyContainer>
                <Frequency>74</Frequency>
                <BPM>BPM</BPM>
              </FrequencyContainer>
            </CaseBpm>
          </ViewLeft>
        </CardPatient>
        <AddPatientContainer>
          <Plus source={PlusIcon}/>
        </AddPatientContainer>
      </Container>
  );
};

export default Home;
