import styled from 'styled-components/native';

import { colors } from '../../variables';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    justifyContent: space-around;
    flexDirection: column;
    alignItems: center;
    background-color: ${colors.primary};
`;



export const IconContainer = styled.View`
    display: flex;
    justifyContent: center;
    alignItems: center;
    paddingTop: 80px;
`;

export const Icon = styled.Image`
    width: 80px;
    height: 80px;
`;

export const TextIcon = styled.Text`
    font-size: 30px;
    color: ${colors.white};
`;

export const SignUp = styled.Text`
    border: 1px solid ${colors.white};
    border-radius: 50px;
    width: 300px;
    height: 50px;
    textAlign: center;
    textAlignVertical: center;
    color: white;
    margin-bottom: 10px;
`;

export const SignIn = styled.Text`
    border: 1px solid ${colors.white};
    border-radius: 50px;
    width: 300px;
    height: 50px;
    textAlign: center;
    textAlignVertical: center;
    color: ${colors.primary};
    background-color: ${colors.white};
`;

export const ButtonsContainer = styled.View``;
