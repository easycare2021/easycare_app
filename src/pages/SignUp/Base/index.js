import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { Container, ContainerButton, Content, HeaderContainer, HeaderTitle } from '../styles';

import BaseButton from '~/components/BaseButton';

const Base = ({ children, nextStep, loading, text }) => {

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
            <HeaderContainer>
                <HeaderTitle>easycare</HeaderTitle>
            </HeaderContainer>
            <Content>
                {children}
            </Content>
            <ContainerButton keyboardIsOpen={keyboardIsOpen}>
                <BaseButton
                    text={text ? text : 'Continuar'}
                    keyboardIsOpen={keyboardIsOpen}
                    loading={loading}
                    onPress={nextStep}
                />
            </ContainerButton>
        </Container>
    );
};

export default Base;
