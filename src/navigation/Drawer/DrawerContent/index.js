import React from 'react';

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
    MaleAvatarImage,
    LogoutIcon,
} from '../../../assets';

const DrawerContent = ({ navigation }) => {

    const navigate = screen => {
      return navigation.navigate(screen);
    };

    return (
      <Container>
        <CaregiverContainer>
          <CaregiverTitleContainer>
            <CaregiverTitle>Cuidador</CaregiverTitle>
            <CaregiverName>João Rodrigues Afonso</CaregiverName>
          </CaregiverTitleContainer>
          <CaregiverAvatarContainer>
            <CaregiverAvatar source={MaleAvatarImage}/>
          </CaregiverAvatarContainer>
        </CaregiverContainer>
        <Row />
        <OptionsContainer>
          <Option onPress={() => navigate('Home')}>
            <OptionIcon source={HomeIcon}/>
            <OptionTitle>Início</OptionTitle>
          </Option>
          <Option onPress={() => navigate('Profile')}>
            <OptionIcon source={ProfileIcon}/>
            <OptionTitle>Perfil</OptionTitle>
          </Option>
          <Option onPress={() => navigate('Feedback')}>
            <OptionIcon source={FeedbackIcon}/>
            <OptionTitle>Feedback</OptionTitle>
          </Option>
          <Option onPress={() => navigate('Help')}>
            <OptionIcon source={HelpIcon}/>
            <OptionTitle>Ajuda</OptionTitle>
          </Option>
          <Row />
          <Option onPress={() => navigate('Logout')}>
            <OptionIcon source={LogoutIcon}/>
            <OptionTitle>Sair</OptionTitle>
          </Option>
        </OptionsContainer>
      </Container>
    );
};

export default DrawerContent;
