import styled from 'styled-components/native';
import { colors, fontSize } from '../../../variables';

export const Container = styled.View`
  flex: 1;
  padding: 40px 30px;
`;

export const CaregiverContainer = styled.View`
    flexDirection: row;
    height: 70px;
`;

export const CaregiverTitleContainer = styled.View`
    width: 70%;
    justifyContent: center;
`;

export const CaregiverTitle = styled.Text`
    color: ${colors.primary};
    fontWeight: bold;
    marginBottom: 5px;
`;

export const CaregiverName = styled.Text`
    fontSize: ${fontSize.title};
`;

export const CaregiverAvatarContainer = styled.View`
    width: 30%;
    alignItems: flex-end;
    justifyContent: center;
`;

export const CaregiverAvatar = styled.Image`
    width: 60px;
    height: 60px;
    borderRadius: 60px;
`;

export const Row = styled.View`
    height: 1px;
    backgroundColor: ${colors.gray2};
    marginTop: 20px;
`;

export const OptionsContainer = styled.View`
    marginTop: 20px;
`;

export const Option = styled.TouchableOpacity`
    flexDirection: row;
    alignItems: center;
    marginTop: 20px;
`;

export const OptionIcon = styled.Image`
    width: 20px;
    height: 20px;
    marginRight: 15px;
    resizeMode: contain;
`;

export const OptionTitle = styled.Text`
    fontSize: ${fontSize.plus};
`;
