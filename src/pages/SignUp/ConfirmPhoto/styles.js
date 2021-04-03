import styled from 'styled-components/native';
import { colors, fontSize } from '../../../variables';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
  fontSize: ${fontSize.plus};
  color: black;
  textAlign: center;
  height: 15%;
  textAlign: center;
  textAlignVertical: center;
  alignItems: center;
`;

export const ContainerPicture = styled.View`
    height: 70%;
    opacity: 0.8;
    background: black;
    borderRadius: 700px;
`;

export const Picture = styled.Image`
    height: 100%;
`;

export const ContainerAction = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    padding: 0 15%;
    height: 15%;
`;

export const Action = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    borderRadius: 70px;
    backgroundColor: ${props => props.color === 'primary' ? colors.primary : 'rgba(0,0,0,0.8)'};
    alignItems: center;
    justifyContent: center;
`;

export const Icon = styled.Image`
    width: 35px;
    height: 35px;
`;
