import React from 'react';

import { Container, Image, Title, Subtitle, UseTouchID, Reject } from './styles';

import FingerPrint from '../../assets/img/fingerprint.png';

import FingerprintScannerService from '../../services/FingerprintScannerService';

const TouchID = ({ navigation }) => {

    return (
        <Container>
            <Image source={FingerPrint} />
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
