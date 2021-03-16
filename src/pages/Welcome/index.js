import React from 'react';
import Easycare from '../../assets/img/easycare_light.png';

import { 
  Container, 
  IconContainer, 
  Icon, 
  TextIcon,
  ButtonsContainer, 
  SignUp, 
  SignIn 
} from './styles';

const Welcome = ({ navigation }) => {

  return (
    <Container>
      <IconContainer>
        <Icon source={Easycare} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>
      <ButtonsContainer>
        <SignUp onPress={() => { navigation.navigate('SignUp') }}>SIGN UP</SignUp>
        <SignIn onPress={() => { navigation.navigate('SignIn') }}>SIGN IN</SignIn>
      </ButtonsContainer>
    </Container>
  );
}

export default Welcome;