import React from 'react';

import {
  Container,
  PatientNameContainer,
  PatientTitle,
  PatientName,
  NeedHelpContainer,
  NeedHelp,
  Call,
  HelpContainer,
  EmergencyCall,
  HeartRateContainer,
  Case,
  Heart,
  RateContainer,
  Rate,
  BPM,
  RateGraphic,
  MainContainer,
  Section,
  MedicineContainer,
  HourContainer,
  Clock,
  Hour,
  Medicine,
  Pilule,
  MedicineName,
  LocationContainer,
  LocationImage,
  LocationText,
  ExerciseContainer,
  ExerciseTitle,
  ExerciseImage,
  LightLevelContainer,
  LightLevelIcon,
  LightLevelText,
  AvatarContainer,
  Avatar,
 } from './styles';

import Header from '~/shared/Header';

import {
  PatientBackgroundImage,
  PatientEmergencyImage,
  HeartImage,
  RateGraphicImage,
  ClockImage,
  PiluleImage,
  PatientExerciseImage,
  PatientLocationImage,
  MoonImage,
  OldManImage,
}
from '~/assets';

const Patient = ({ navigation }) => {
  return (
      <Container source={PatientBackgroundImage}>
        <Header navigation={navigation}/>
        <PatientNameContainer>
          <PatientTitle>Olá,</PatientTitle>
          <PatientName>Adailton</PatientName>
        </PatientNameContainer>
        <AvatarContainer>
          <Avatar source={OldManImage}/>
        </AvatarContainer>
        <HelpContainer>
          <NeedHelpContainer>
            <NeedHelp>Precisa de ajuda?</NeedHelp>
            <EmergencyCall>Chamada de emergência</EmergencyCall>
          </NeedHelpContainer>
          <Call source={PatientEmergencyImage}/>
        </HelpContainer>

        <HeartRateContainer>
          <Case>
            <Heart source={HeartImage}/>
            <RateContainer>
              <Rate>74</Rate>
              <BPM>BPM</BPM>
            </RateContainer>
          </Case>
          <RateGraphic source={RateGraphicImage}/>
        </HeartRateContainer>

        <MainContainer>
          <Section>
            <MedicineContainer>
              <HourContainer>
                <Clock source={ClockImage}/>
                <Hour>18:00</Hour>
              </HourContainer>
              <Medicine>
                <Pilule source={PiluleImage}/>
                <MedicineName>Ibuprofeno</MedicineName>
              </Medicine>
            </MedicineContainer>
            <LocationContainer>
              <LocationImage source={PatientLocationImage}/>
              <LocationText>Estou aqui</LocationText>
            </LocationContainer>
          </Section>
          <Section>
            <ExerciseContainer>
              <ExerciseTitle>Fique mais forte!</ExerciseTitle>
              <ExerciseImage source={PatientExerciseImage}/>
            </ExerciseContainer>
          </Section>
        </MainContainer>
        <LightLevelContainer>
          <LightLevelIcon source={MoonImage}/>
          <LightLevelText> Aqui está escuro...</LightLevelText>
        </LightLevelContainer>
      </Container>
  );
};

export default Patient;
