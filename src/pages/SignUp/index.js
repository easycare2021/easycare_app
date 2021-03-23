import React, { useState } from 'react';
import * as types from '../../reducers/types';

import {
  Container,
  Button,
  TextButton,
  ContainerButton,
  Title,
  Subtitle,
  GenderIconMale,
  GenderIconFemale,
  GenderIconContainer,
  GenderContainer,
  GenderDescription,
  Other,
  TitleContainer,
} from './styles';

import { TouchableOpacity } from 'react-native';

import FemaleAvatar from '../../assets/img/female_avatar.png';
import MaleAvatar from '../../assets/img/male_avatar.png';

import BaseTextInput from '../../components/BaseTextInput';
import BaseTextInputMasked from '../../components/BaseTextInputMasked';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import UserService from '../../services/UserService';
import CaregiverService from '../../services/CaregiverService';
import { useEffect } from 'react/cjs/react.development';

const userService = new UserService();
const caregiverService = new CaregiverService();


const alertError = (message) => {
  return Toast.show({
    type: 'error',
    position: 'bottom',
    text1: message,
    autoHide: true,
    visibilityTime: 2000,
  });
};


const Username = ({ navigation }) => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const nextStep = async ()  => {

    if (!username) {

      alertError('Insira um nome de usuário');
      return;
    }

    const alreadExists = await userService.verifyAlreadyExists(username);

    // user do not exists
    if (alreadExists === '') {

      dispatch({
        type: types.ADD_USER,
        payload: {
          username,
        },
      });

      navigation.navigate('Email');

    } else {

      alertError('Nome de usuário já cadastrado');
      return;
    }
  };

  return (
    <Container>
      <Title>Digite um nome de usuário</Title>
      <BaseTextInput placeholder="Nome de Usuário" onChangeText={(text) => setUsername(text)}/>
      <ContainerButton onStartShouldSetResponder={nextStep}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const Email = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const nextStep = async ()  => {

    if (!email) {

      alertError('Insira um email!');
      return;
    }

    dispatch({
      type: types.ADD_USER,
      payload: {
        email,
      },
    });

    navigation.navigate('Password');
  };

  return (
    <Container>
      <Title>Digite seu email</Title>
      <BaseTextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      <ContainerButton onStartShouldSetResponder={nextStep}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const Password = ({ navigation }) => {

  const dispatch = useDispatch();

  const [password, setPassword]  = useState('');
  const [confirm, setConfirm] = useState('');

  const nextStep = async ()  => {

    if (!password || !confirm) {

      alertError('Preencha todos os campos!');
      return;
    }

    if (password !== confirm) {

      alertError('As senhas não conferem!');
      return;
    }

    dispatch({
      type: types.ADD_USER,
      payload: {
        password,
      },
    });

    navigation.navigate('Name');
  };

  return (
    <Container>
      <Title>Digite sua senha</Title>
      <BaseTextInput placeholder="Senha" onChangeText={(text) => setPassword(text)} secureTextEntry/>
      <BaseTextInput placeholder="Confirmar Senha" onChangeText={(text) => setConfirm(text)} secureTextEntry/>
      <ContainerButton onStartShouldSetResponder={nextStep}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const Name = ({ navigation }) => {

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const { user } = useSelector( state => ({ user: state.user }));

  const nextStep = async () => {

    if (!name) {

      alertError('Insira um nome!');
      return;
    }
    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        name,
      },
    });

    await userService.store(user).then(res => {

      dispatch({
        type: types.ADD_CAREGIVER,
        payload: {
          userId: res.id,
        },
      });
    }).catch(err => console.error(err));

    navigation.navigate('Document');
  };

  return (
    <Container>
      <Title>Digite seu nome completo</Title>
      <BaseTextInput placeholder="Nome Completo" onChangeText={(text) => setName(text)}/>
      <ContainerButton onStartShouldSetResponder={nextStep}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const Document = ({ navigation }) => {

  const [document, setDocument] = useState('');

  const dispatch = useDispatch();

  const nextStep = () => {

    if (!document) {

      alertError('Insira um nome!');
      return;
    }

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        document,
      },
    });

    navigation.navigate('Gender');
  };

  return (
    <Container>
      <Title>Digite seu CPF</Title>
      <BaseTextInputMasked
        type={'cpf'}
        onChangeText={(text) => setDocument(text)}
      />
      <ContainerButton onStartShouldSetResponder={nextStep}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const Gender = ({ navigation }) => {

  const [gender, setGender] = useState('');

  const [selectedMale, setSelectedMale] = useState(false);
  const [selectedFemale, setSelectedFemale] = useState(false);

  const dispatch = useDispatch();

  const { caregiver } = useSelector( state => ({ caregiver: state.caregiver }));

  useEffect(() => {
    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        gender,
      },
    });
  }, [dispatch, gender]);

  const createCaregiver = async () => {

    if (!gender) {

      alertError('Selecione um gênero');
      return;
    }

    dispatch({
      type: types.ADD_CAREGIVER,
      payload: {
        gender,
      },
    });

    await caregiverService.store(caregiver).then(() => {

      navigation.navigate('SignIn');
    }).catch(err => console.error(err));

  };

  return (
    <Container isFlex={true}>
      <TitleContainer>
        <Title>Olá Lucas,</Title>
        <Subtitle>Selecione seu gênero</Subtitle>
      </TitleContainer>
      <GenderContainer>
        <GenderIconContainer>
          <TouchableOpacity onPress={() => { setGender('Male'); setSelectedMale(true); setSelectedFemale(false); }}>
            <GenderIconMale source={MaleAvatar} selectedMale={selectedMale}/>
          </TouchableOpacity>
          <GenderDescription>Masculino</GenderDescription>
        </GenderIconContainer>
        <GenderIconContainer>
          <TouchableOpacity onPress={() => { setGender('Female'); setSelectedFemale(true); setSelectedMale(false); }}>
            <GenderIconFemale source={FemaleAvatar} selectedFemale={selectedFemale}/>
          </TouchableOpacity>
          <GenderDescription>Feminino</GenderDescription>
        </GenderIconContainer>
      </GenderContainer>
      <Other onPress={() => setGender('Other')}>Prefiro não dizer</Other>
      <ContainerButton onStartShouldSetResponder={createCaregiver}>
        <Button><TextButton>Continuar</TextButton></Button>
      </ContainerButton>
    </Container>
  );
};

const SignUpNavigator = createStackNavigator(
  {
    Username: Username,
    Email: Email,
    Password: Password,
    Name: Name,
    Document: Document,
    Gender: Gender,
  },
  {
    initialRouteName: 'Username',
    defaultNavigationOptions: { headerShown: false },
  });


export default createAppContainer(SignUpNavigator);
