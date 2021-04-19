import styled from 'styled-components/native';

import { colors, fontSize } from '~/variables';

export const Container = styled.ImageBackground`
    flex: 1;
    flexDirection: column;
    padding: 45px 25px;
`;

export const CardPatient = styled.TouchableOpacity`
    height: 100px;
    padding: 12px;
    marginTop: 20px;
    borderRadius: 12px;
    elevation: 10;
    backgroundColor: ${colors.white};
    flexDirection: row;
    flex-wrap: wrap;
    justifyContent: space-between;
`;

export const IconPatient = styled.Image`
    width: 75px;
    height: 75px;
    borderRadius: 50px;
    borderWidth: 3px;
    borderColor: ${colors.darkgray};
`;
export const ViewLeft = styled.View`
    width: 75%;
    height: 100%;
    bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
`;

export const NamePatient = styled.Text`
    height: 40%;
    paddingLeft: 10px;
    color: #3F3D56;
    fontWeight: 500;
    fontSize: ${fontSize.plus};
    marginTop: 10px;
`;

export const CaseBpm = styled.View`
    width: 75px;
    height: 75px;
    alignItems: flex-end;
    flexDirection: row;
    marginRight: 10px;
`;

export const Heart = styled.Image`
    width: 50px;
    height: 42px;
`;

export const FrequencyContainer = styled.View`
    alignItems: center;
    justifyContent: flex-end;
`;

export const Frequency = styled.Text`
    color: ${colors.primary}
    fontSize: ${fontSize.plus};
    fontWeight: bold;
`;

export const BPM = styled.Text`
    color: ${colors.primary}
    fontSize: ${fontSize.default};
    fontWeight: bold;
`;

export const AddPatientContainer = styled.TouchableOpacity`
    height: 80px;
    width: 80px;
    marginTop: 20px;
    alignSelf: center;
    borderRadius: 80px;
    elevation: 10;
    backgroundColor: ${colors.white};
    display: flex;
    justifyContent: center;
    alignItems: center;
`;

export const Plus = styled.Image`
    width: 25px;
    height: 25px;
`;
