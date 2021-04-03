import styled from 'styled-components/native';

import TextInputMask from 'react-native-text-input-mask';
import { colors, fontSize } from '../../variables';

export const Container = styled.View`
    width: 100%;
    marginBottom: 25px;
`;

export const Label = styled.Text`
    color: ${colors.primary};
    fontSize: ${fontSize.default};
    textTransform: uppercase;
`;

export const Input = styled(TextInputMask)`
    borderBottomColor: ${colors.primary};
    borderBottomWidth: 1px;
`;
