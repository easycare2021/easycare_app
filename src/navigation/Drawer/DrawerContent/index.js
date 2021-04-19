import React, { useEffect, useState } from 'react';
import {
  Container,
  CaregiverContainer,
  CaregiverTitleContainer,
  CaregiverTitle,
  CaregiverName,
  CaregiverAvatarContainer,
  CaregiverAvatar,
  Row,
  OptionsContainer,
  Option,
  OptionIcon,
  OptionTitle,
} from './styles';
import {
  HomeIcon,
  HelpIcon,
  ProfileIcon,
  FeedbackIcon,
  LogoutIcon,
} from '~/assets';
import CaregeverService from '~/services/CaregiverService';
import { MMKV } from 'react-native-mmkv';
import { deleteAllKeys } from '~/utils/mmkv';

const DrawerContent = ({ navigation }) => {

  const navigate = screen => {
    return navigation.navigate(screen);
  };

  const caregiverService = new CaregeverService();

  const [caregiver, setCaregiver] = useState({});

  useEffect(() => {

    showCaregiver();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showCaregiver = async () => {

    await caregiverService.show(MMKV.getNumber('caregiverID')).then(response => {

      setCaregiver(response);
    }).catch(err => console.log(err));
  };

  return (
    <Container>
      <CaregiverContainer>
        <CaregiverTitleContainer>
          <CaregiverTitle>Cuidador</CaregiverTitle>
          <CaregiverName>{caregiver.name}</CaregiverName>
        </CaregiverTitleContainer>
        <CaregiverAvatarContainer>
          <CaregiverAvatar source={{ uri: caregiver.photo }} />
        </CaregiverAvatarContainer>
      </CaregiverContainer>
      <Row />
      <OptionsContainer>
        <Option onPress={() => navigate('Home')}>
          <OptionIcon source={HomeIcon} />
          <OptionTitle>Início</OptionTitle>
        </Option>
        <Option onPress={() => navigate('Profile')}>
          <OptionIcon source={ProfileIcon} />
          <OptionTitle>Perfil</OptionTitle>
        </Option>
        <Option onPress={() => navigate('Feedback')}>
          <OptionIcon source={FeedbackIcon} />
          <OptionTitle>Feedback</OptionTitle>
        </Option>
        <Option onPress={() => navigate('Help')}>
          <OptionIcon source={HelpIcon} />
          <OptionTitle>Ajuda</OptionTitle>
        </Option>
        <Row />
        <Option onPress={() => { deleteAllKeys(); navigation.navigate('Welcome');}}>
          <OptionIcon source={LogoutIcon} />
          <OptionTitle>Sair</OptionTitle>
        </Option>
      </OptionsContainer>
    </Container>
  );
};

export default DrawerContent;
