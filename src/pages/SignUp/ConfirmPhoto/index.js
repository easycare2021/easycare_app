import React from 'react';
import {
    Container,
    ContainerPicture,
    Picture, Title,
    ContainerAction,
    Action,
    Icon,
} from './styles';
import { CloseIcon, DoneIcon } from '~/assets';
import FirebaseStorageService from '~/services/FirebaseStorageService';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '~/reducers/types';


const ConfirmPhoto = ({ route, navigation }) => {

    const uri = route.params.photoUri;

    const dispatch = useDispatch();

    const firebaseStorageService = new FirebaseStorageService();

    const { caregiver } = useSelector(state => ({ caregiver: state.caregiver }));

    const photoId = Math.random().toString(36).substring(7);

    const reference = 'caregivers-profile/' + caregiver.name + '-' + photoId;

    const nextStep = async () => {

        await firebaseStorageService.upload(reference, uri);

        dispatch({
          type: types.ADD_CAREGIVER,
          payload: {
            photo: await firebaseStorageService.getUrl(reference),
          },
        });

        navigation.navigate('Gender');
    };

    return (
        <Container>
            <Title>Confirme se a foto ficou adequada.</Title>
            <ContainerPicture>
                <Picture source={{ uri }} />
            </ContainerPicture>
            <ContainerAction>
                <Action color="primary" onPress={nextStep}>
                    <Icon source={DoneIcon}/>
                </Action>
                <Action onPress={() => navigation.goBack()}>
                    <Icon source={CloseIcon} />
                </Action>
            </ContainerAction>
        </Container>
    );
};

export default ConfirmPhoto;
