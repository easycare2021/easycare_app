import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { Button, Container, ContainerButton, Loading, TextButton } from '../styles';

const Base = ({ children, nextStep, loading }) => {

    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

    useEffect(() => {

        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = (e) => {

        setKeyboardHeight(e.endCoordinates.height);
        setKeyboardIsOpen(true);
        MMKV.set('keyboardIsOpen', true);
    };

    const _keyboardDidHide = () => {
        setKeyboardHeight(0);
        setKeyboardIsOpen(false);
        MMKV.set('keyboardIsOpen', false);
    };

    return (
        <Container keyboardIsOpen={keyboardIsOpen} keyboardHeight={keyboardHeight}>
            {children}
            <ContainerButton onStartShouldSetResponder={nextStep} keyboardIsOpen={keyboardIsOpen}>
                <Button keyboardIsOpen={keyboardIsOpen}>
                    <TextButton>Continuar</TextButton>
                    {loading && <Loading color="white" />}
                </Button>
            </ContainerButton>
        </Container>
    );
};

export default Base;
