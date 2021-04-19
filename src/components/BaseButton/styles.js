import styled, { css } from 'styled-components/native';
import { colors, fontSize } from '~/variables';

export const Container = styled.TouchableOpacity`
    background: ${colors.primary};
    width: 100%;
    height: 60px;
    borderRadius: 18px;
    borderTopRightRadius: 0px;
    justifyContent: center;
    alignItems: center;
    flexDirection: row;

    ${props => props.keyboardIsOpen && css`
        borderRadius: 0px;
    `}

    ${props => props.theme === 'light' && css`
        background: ${colors.white};
    `}

    ${props => props.theme === 'transparent' && css`
        background: ${colors.transparent};
    `}
`;

export const Text = styled.Text`
    fontSize: ${fontSize.title};
    color: ${colors.white};

    ${props => props.theme === 'light' && css`
        color: ${colors.primary};
    `}
`;

export const Loading = styled.ActivityIndicator`
    alignSelf: center;
    marginLeft: 10px;
`;
