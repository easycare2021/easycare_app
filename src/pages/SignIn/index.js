import React, { useState, useEffect } from 'react';

import {
  Container,
  IconContainer,
  Icon,
  TextIcon,
  InputContainer,
  SignInButton,
  SignInText,
  ForgotPassword,
  SocialMediaContainer,
  OthersConnectionsContainer,
  ConnectWith,
  Stick,
  MediaIconContainer,
  MediaIcon,
  Loading,
 } from './styles';

import Easycare from '../../assets/img/easycare_default.png';
import Google from '../../assets/icons/google.png';
import Facebook from '../../assets/icons/facebook.png';

import BaseTextInput from '../../components/BaseTextInput';
import UserService from '../../services/UserService';

import { MMKV } from 'react-native-mmkv';
import FingerprintScannerService from '../../services/FingerprintScannerService';
import Toast from 'react-native-toast-message';

const SignIn = ({ navigation }) => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const showTouchIDAuthentication = MMKV.getBoolean('showTouchIDAuthentication');

    if (showTouchIDAuthentication) {

      new FingerprintScannerService().authCurrent(navigation);
    }

    return () => {

      new FingerprintScannerService().release();
    };
  });

  const auth = async () => {

    if (!user.password || !user.email) {

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Preencha todos os campos!',
        autoHide: true,
        visibilityTime: 2000,
      });

      return;
    }

    const userService = new UserService();

    await userService.auth(user).then((res) => {

      setLoading(true);

      setTimeout(() => {
        MMKV.set('Authorization', res.token);
        navigation.navigate('TouchID');
        setLoading(false);
      }, 1500);
    }).catch( err => {

      setLoading(true);

      setTimeout(() => {
        if (err.response && err.response.status === 401) {

          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Email e/ou senha inválidos.',
            autoHide: true,
            visibilityTime: 2000,
          });

          setLoading(false);
        }
      }, 1500);
    });
  };

  return (
    <Container>
      <IconContainer>
        <Icon source={Easycare} />
        <TextIcon>easycare</TextIcon>
      </IconContainer>

      <InputContainer>
        <BaseTextInput label="email" onChangeText={(text) => setUser({ ...user, email: text })} />
        <BaseTextInput label="password" onChangeText={(text) => setUser({ ...user, password: text })} secureTextEntry/>
        <ForgotPassword>forgot password?</ForgotPassword>
      </InputContainer>

      <SignInButton onStartShouldSetResponder={auth}>
        <SignInText>sign in</SignInText>
        { loading && <Loading color="white"/> }
      </SignInButton>

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

          <MediaIconContainer background="#3b5998">
            <MediaIcon source={Facebook}/>
          </MediaIconContainer>
        </OthersConnectionsContainer>
      </SocialMediaContainer>
    </Container>
  );
};

export default SignIn;
