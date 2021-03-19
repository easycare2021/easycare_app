import styled from 'styled-components/native';

import { colors } from '../../variables';

export const Container = styled.View`
  display: flex;
  alignItems: center;
  justifyContent: space-around;
  height: 100%;
  padding: 50px 20px;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
    marginTop: 40px;
`;

export const Title = styled.Text`
    fontSize: 22px;
    fontWeight: 500;
`;

export const Subtitle = styled.Text`
    textAlign: center;
    fontSize: 16px;
    padding: 10px 20px;
`;

export const UseTouchID = styled.Text`
    border-radius: 50px;
    width: 300px;
    height: 60px;
    textAlign: center;
    fontSize: 18px;
    textAlignVertical: center;
    color: ${colors.white};
    background-color: ${colors.primary};
`;

export const Reject = styled.Text`
    fontSize: 18px;
    color: ${ colors.primary };
    textDecoration: underline;
`;
