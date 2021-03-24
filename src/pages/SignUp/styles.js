import styled, { css } from 'styled-components/native';

import { colors, fontSize } from '../../variables';

export const Container = styled.View`
  flex: 1;
  padding: 40px 30px;
  background-color: ${colors.white};

  ${ props => props.isFlex && css`
    display: flex;
    justifyContent: space-around;
  `}
`;

export const TitleContainer = styled.View`

`;

export const Title = styled.Text`
  fontSize: ${fontSize.plus};
  color: black;
  textAlign: center;
  marginBottom: 10px;
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
`;

export const Button = styled.View`
  border-radius: 50px;
  height: 50px;
  display: flex;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
  background-color: ${colors.primary};
  
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  fontSize: ${ fontSize.default };
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
  background: ${ props => props.selectedFemale ? colors.primary : 'transparent'};
`;

export const GenderIconMale = styled.Image`
  width: 150px;
  height: 150px;
  padding: 0;
  borderRadius: 150px;
  background: ${ props => props.selectedMale ? colors.primary : 'transparent'};
`;

export const GenderDescription = styled.Text`

`;

export const Other = styled.Text`
  textAlign: center;
  fontSize: ${fontSize.title};
  color: ${colors.gray3};
  text-decoration: underline;
`;
