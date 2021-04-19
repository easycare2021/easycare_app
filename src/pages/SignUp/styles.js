import styled, { css } from 'styled-components/native';

import { colors, fontSize } from '~/variables';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  height: 100%;
  backgroundColor: ${colors.primary};

  ${props => props.isFlex && css`
    display: flex;
    justifyContent: space-around;
  `}

  ${props => props.keyboardIsOpen && css`
    height: ${(Dimensions.get('window').height - props.keyboardHeight).toFixed(0) - 7}px;
  `}
`;

export const InfoLabel = styled.Text`
  textAlign: center;
  margin: 10px 0px;
  color: ${colors.gray4};
`;

export const HeaderContainer = styled.View`
  height: 15%;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${colors.primary}
`;

export const HeaderTitle = styled.Text`
  fontSize: 24px;
  color: ${colors.white};
`;

export const Content = styled.View`
  height: 85%;
  borderTopLeftRadius: 100px;
  padding: 0px 30px;
  background: ${colors.gray1};
`;

export const Title = styled.Text`
  fontSize: ${fontSize.plus};
  color: black;
  textAlign: center;
  marginBottom: 40px;
  marginTop: 50px;
`;

export const Subtitle = styled.Text`
  fontSize: ${fontSize.title};
  color: black;
  textAlign: center;
`;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 30px;

  ${props => props.keyboardIsOpen && css`
    width: ${(Dimensions.get('window').width).toFixed(0)}px;
    left: 0;
    padding: 0px;
  `}
`;

export const Button = styled.View`
  borderRadius: 50px;
  height: 50px;
  display: flex;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
  backgroundColor: ${colors.primary};

  ${props => props.keyboardIsOpen && css`
    borderRadius: 0;
  `}
`;

export const Label = styled.Text`
    color: ${colors.primary};
    fontSize: ${fontSize.default};
    textTransform: uppercase;
`;
