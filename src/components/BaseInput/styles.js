import styled from 'styled-components/native';
import { colors } from '~/variables';

export const Container = styled.View`
    borderRadius: 18px;
    borderTopRightRadius: 0px;
    height: 75px;
    backgroundColor: white;
    marginBottom: 35px;
    justifyContent: center;
    paddingLeft: 20px;
`;

export const Label = styled.Text`
    marginBottom: 5px;
`;

export const Input = styled.TextInput`
    padding: 0;
    color: ${colors.gray3};
    letterSpacing: 0;
`;

export const IconContainer = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    bottom: 10px;
`;

export const Icon = styled.Image`
    width: 26px;
    height: 26px;
`;
