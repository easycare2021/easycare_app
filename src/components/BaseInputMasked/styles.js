import styled from 'styled-components/native';

import TextInputMask from 'react-native-text-input-mask';
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
    color: ${colors.black};
`;

export const Input = styled(TextInputMask)`
    padding: 0;
    color: ${colors.gray3};
    letterSpacing: 0;
`;
