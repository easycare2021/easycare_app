import styled, { css } from 'styled-components/native';

import { colors, fontSize } from '../../variables';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  height: 100%;
  padding: 40px 30px;
  backgroundColor: ${colors.white};

  ${props => props.isFlex && css`
    display: flex;
    justifyContent: space-around;
  `}

  ${props => props.keyboardIsOpen && css`
    height: ${(Dimensions.get('window').height - props.keyboardHeight).toFixed(0) - 7}px;
  `}
`;

export const TitleContainer = styled.View`

`;

export const Title = styled.Text`
  fontSize: ${fontSize.plus};
  color: black;
  textAlign: center;
  marginBottom: 20px;
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
  left: 30px;

  ${props => props.keyboardIsOpen && css`
    width: ${(Dimensions.get('window').width).toFixed(0)}px;
    left: 0;
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

export const Loading = styled.ActivityIndicator`
    alignSelf: center;
    marginLeft: 10px;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  fontSize: ${fontSize.default};
`;

export const GenderContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-around;
`;

export const GenderIconContainer = styled.View`
  display: flex;
  justifyContent: space-around;
  alignItems: center;
`;

export const GenderIconFemale = styled.Image`
  width: 150px;
  height: 150px;
  padding: 0;
  borderRadius: 150px;
  background: ${props => props.selectedFemale ? colors.primary : 'transparent'};
`;

export const GenderIconMale = styled.Image`
  width: 150px;
  height: 150px;
  padding: 0;
  borderRadius: 150px;
  background: ${props => props.selectedMale ? colors.primary : 'transparent'};
`;

export const GenderDescription = styled.Text`

`;

export const Other = styled.Text`
  textAlign: center;
  fontSize: ${fontSize.title};
  color: ${colors.gray3};
  textDecoration: underline;
`;

export const Label = styled.Text`
    color: ${colors.primary};
    fontSize: ${fontSize.default};
    textTransform: uppercase;
`;
