import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { colors, fontSize } from '../../../variables';

export const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: ${colors.white};
`;

export const HeaderContainer = styled.View`
    background: ${colors.white};
    justifyContent: center;
    height: 150px;
`;

export const HeaderTitle = styled.Text`
    textAlign: center;
    fontSize: ${fontSize.title};
    color: ${colors.darkgray};
`;

export const Camera = styled(RNCamera)`
    justifyContent: flex-end;
    alignItems: center;
    flex: 1;
`;

export const ActionsContainer = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    height: 100px;
`;

export const ActionContainer = styled.TouchableOpacity``;

export const Action = styled.Image`
    width: 30px;
    height: 30px;
`;

export const ContainerTakePicure = styled.TouchableOpacity` 
    elevation: 5;
    background: ${colors.gray2};
    padding: 10px;
    borderRadius: 50px;
`;
export const TakePicture = styled.View`
    height: 50px;
    width: 50px;
    background: ${colors.gray2};
    borderRadius: 50px;

    borderWidth: 1px;
    borderColor: ${colors.white};
`;

export const Negate = styled.Text`
    textAlign: center;
    marginTop: 10px;
    textDecoration: underline;
    fontSize: ${fontSize.title};
    color: ${colors.black};
`;
