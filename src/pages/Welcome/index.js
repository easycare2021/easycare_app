import React, { useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';
import Easycare from '../../assets/img/easycare_light.png';

import {
  Container,
  IconContainer,
  Icon,
  TextIcon,
  ButtonsContainer,
  SignUp,
  SignIn,
} from './styles';


const Welcome = ({ navigation }) => {

  useEffect(() => {
    if (MMKV.getBoolean('showTouchIDAuthentication')) {
      navigation.navigate('SignIn');
    }
  });

  return (
    <Container>
      <IconContainer>
        <Icon source={Easycare} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>
      <ButtonsContainer>
        <SignUp onPress={() => { navigation.navigate('SignUp'); }}>SIGN UP</SignUp>
        <SignIn onPress={() => { navigation.navigate('SignIn'); }}>SIGN IN</SignIn>
      </ButtonsContainer>
    </Container>
  );
};

export default Welcome;
