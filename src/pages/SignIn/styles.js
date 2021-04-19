import styled from 'styled-components/native';
import { colors, fontSize } from '~/variables';

export const Container = styled.View`
    height: 100%;
    backgroundColor: ${colors.primary};
`;

export const IconContainer = styled.View`
    height: 30%;
    justifyContent: center;
    alignItems: center;
`;

export const IconText = styled.Text`
    fontSize: 26px;
    color: ${colors.white};
`;

export const Icon = styled.Image`
    height: 60px;
    width: 60px;
`;

export const LoginContainer = styled.View`
    height: 70%;
    backgroundColor: ${colors.gray0};
    borderTopLeftRadius: 100px;
    alignItems: center;
    justifyContent: space-around;
    padding: 0px 40px;
`;

export const Title = styled.Text`
    fontSize: 26px;
    marginTop: 20px;
`;

export const FormContainer = styled.View`
    width: 100%;
`;

export const Message = styled.Text`
    fontSize: ${fontSize.title};
`;
