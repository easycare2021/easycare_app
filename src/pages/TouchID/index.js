import React from 'react';

import { Container, Image, Title, Subtitle, UseTouchID, Reject } from './styles';

import { FingerprintImage } from '~/assets';

import FingerprintScannerService from '~/services/FingerprintScannerService';

const TouchID = ({ navigation }) => {

    return (
        <Container>
            <Image source={FingerprintImage} />
            <Title>
                Autenticar com Touch ID
            </Title>
            <Subtitle>
                Use seu Touch ID para um acesso mais rápido e fácil à sua conta.
            </Subtitle>
            <UseTouchID onPress={() => new FingerprintScannerService().authCurrent(navigation)}>
                Usar Touch ID
            </UseTouchID>
            <Reject onPress={() => { navigation.navigate('Home'); new FingerprintScannerService().release(); } }>
                Não, obrigado.
            </Reject>
        </Container>
    );
};

export default TouchID;
