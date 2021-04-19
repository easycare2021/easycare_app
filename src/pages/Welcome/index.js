import React, { useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';
import { EasycareLightImage } from '~/assets';
import {
  Container,
  IconContainer,
  Icon,
  TextIcon,
  ButtonsContainer,
} from './styles';
import BaseButton from '~/components/BaseButton';

const Welcome = ({ navigation }) => {

  useEffect(() => {
    if (MMKV.getBoolean('showTouchIDAuthentication')) {
      navigation.navigate('SignIn');
    }
  });
  return (
    <Container>
      <IconContainer>
        <Icon source={EasycareLightImage} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>
      <ButtonsContainer>
        <BaseButton
          text="Entrar"
          onPress={() => { navigation.navigate('SignIn'); }}
          theme="light"
        />
        <BaseButton
          text="Cadastre-se"
          onPress={() => { navigation.navigate('SignUp'); }}
          theme="transparent"
        />
      </ButtonsContainer>
    </Container>
  );
};

export default Welcome;
