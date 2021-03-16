import React from 'react';


import { 
  Container,
  IconContainer,
  Icon,
  TextIcon,
  InputContainer,
  SignInButton,
  ForgotPassword,
  SocialMediaContainer,
  OthersConnectionsContainer,
  ConnectWith,
  Stick,
  MediaIconContainer,
  MediaIcon
 } from './styles';

import Easycare from '../../assets/img/easycare_default.png';
import Google from '../../assets/icons/google.png';
import Facebook from '../../assets/icons/facebook.png';
import BaseTextInput from '../../components/BaseTextInput';

const SignIn = () => {
  return(
    <Container>

      <IconContainer>
        <Icon source={Easycare} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>

      <InputContainer>
        <BaseTextInput label='username' />
        <BaseTextInput label='password' />
        <ForgotPassword>forgot password?</ForgotPassword>
      </InputContainer>

      <SignInButton>sign in</SignInButton>

      <SocialMediaContainer>
        <OthersConnectionsContainer>
          <Stick />
          <ConnectWith>or connect with</ConnectWith>
          <Stick />
        </OthersConnectionsContainer>

        <OthersConnectionsContainer>
          <MediaIconContainer>
            <MediaIcon source={Google}/>
          </MediaIconContainer>

          <MediaIconContainer background='#3b5998'>
            <MediaIcon source={Facebook}/>
          </MediaIconContainer>
        </OthersConnectionsContainer>
      </SocialMediaContainer>
    </Container>
  );
}

export default SignIn;