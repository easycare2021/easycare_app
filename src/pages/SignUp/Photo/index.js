import React, { useState, useRef } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Container,
  Camera,
  HeaderContainer,
  HeaderTitle,
  ActionsContainer,
  Action,
  TakePicture,
  ContainerTakePicure,
  Negate,
  ActionContainer,
} from './styles';
import { GalleryIcon, SwitchCameraIcon } from '~/assets';

const Photo = ({ navigation }) => {

  const [type, setType] = useState('front');

  const cameraRef = useRef(null);

  const takePicture = async () => {

    if (cameraRef) {

      const options = { quality: 0.5 };
      const { uri } = await cameraRef.current.takePictureAsync(options);

      navigation.navigate('ConfirmPhoto', { photoUri: uri });
    }
  };

  const takeLibraryPicture = async () => {

    const options = { mediaType: 'photo', quality: 0.5 };

    return launchImageLibrary(options, async photo => {

      navigation.navigate('ConfirmPhoto', { photoUri: photo.uri });
    });
  };

  const skip = () => {
    navigation.navigate('Gender');
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Por último, uma foto para o seu perfil.</HeaderTitle>
        <Negate onPress={skip}>Agora não...</Negate>
      </HeaderContainer>
      <Camera
        ref={cameraRef}
        type={type}
        flashMode={Camera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a camêra',
          message: 'Precisamos de sua permissão para usar a camêra',
          buttonPositive: 'Permitar',
          buttonNegative: 'Negar',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permissão para gravar áudio',
          message: 'Precisamos de sua permissão para usar o áudio',
          buttonPositive: 'Permitir',
          buttonNegative: 'Negar',
        }}
      />
      <ActionsContainer>
        <ActionContainer onPress={() => takeLibraryPicture()}>
          <Action source={GalleryIcon} />
        </ActionContainer>
        <ContainerTakePicure onPress={() => takePicture()}>
          <TakePicture />
        </ContainerTakePicure>
        <ActionContainer onPress={() => setType(type === 'front' ? 'back' : 'front')}>
          <Action source={SwitchCameraIcon} />
        </ActionContainer>
      </ActionsContainer>
    </Container>
  );
};

export default Photo;
