import styled from 'styled-components/native';
import { colors, fontSize } from '../../variables';

export const Container = styled.ImageBackground`
    flex: 1;
    resizeMode: cover;
    padding: 35px 40px;
`;

export const PatientNameContainer = styled.View`
    marginTop: 25px;
`;

export const PatientTitle = styled.Text`
    fontSize: ${fontSize.title};
    fontWeight: bold;
    color: ${colors.darkgray};
`;

export const PatientName = styled.Text`
    fontSize: ${fontSize.plus};
    fontWeight: bold;
    color: ${colors.primary};
`;

export const AvatarContainer = styled.TouchableOpacity`
    position: absolute;
    top: 30px;
    right: 40px;
    borderRadius: 80px;
    borderWidth: 6px;
    borderColor: ${colors.white};
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    borderRadius: 80px;
`;

export const HelpContainer = styled.TouchableOpacity`
    flexDirection: row;
    backgroundColor: ${colors.white}
    alignItems: center;
    justifyContent: space-around;
    borderRadius: 12px;
    padding: 10px 0px;
    marginTop: 40px;
`;

export const NeedHelpContainer = styled.View``;

export const NeedHelp = styled.Text`
    fontSize: ${fontSize.plus};
    fontWeight: bold;
    color: ${colors.darkgray};
`;

export const EmergencyCall = styled.Text`
    color: ${colors.darkgray};
`;

export const Call = styled.Image`
    
`;

export const HeartRateContainer = styled.TouchableOpacity`
    backgroundColor: ${colors.white};
    marginTop: 20px;
    borderRadius: 12px;
    padding: 10px 10px;
    borderBottomWidth: 25px;
    borderBottomColor: ${colors.darkgray}
`;

export const Case = styled.View`
    alignItems: flex-end;
    flexDirection: row;
`;

export const Heart = styled.Image`
    width: 50px;
    height: 42px;
`;

export const RateContainer = styled.View`
    alignItems: center;
    justifyContent: flex-end;
`;

export const Rate = styled.Text`
    color: ${colors.primary}
    fontSize: ${fontSize.plus};
    fontWeight: bold;
`;

export const BPM = styled.Text`
    color: ${colors.primary}
    fontSize: ${fontSize.default};
    fontWeight: bold;
`;

export const RateGraphic = styled.Image`
    alignSelf: center;
    marginTop: 20px;
    marginBottom: -35px;
`;

export const MainContainer = styled.View`
    flexDirection: row;
    marginTop: 20px;
`;

export const Section = styled.View`
    width: 50%;
`;

export const MedicineContainer = styled.TouchableOpacity`
    backgroundColor: ${colors.white};
    padding: 7px;
    borderRadius: 12px;
    height: 100px;
    justifyContent: space-around;
`;

export const HourContainer = styled.View`
    flexDirection: row;
    alignItems: center;
`;

export const Clock = styled.Image`
    width: 30%;
`;

export const Hour = styled.Text`
    width: 70%;
    textAlign: center;
    fontSize: ${fontSize.plus};
    fontWeight: bold;
    color: ${colors.darkgray};
`;

export const Medicine = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
`;

export const Pilule = styled.Image`
    width: 20%;
`;

export const MedicineName = styled.Text`
    width: 80%;
    marginLeft: 10px;
    fontSize: ${fontSize.plus};
    fontWeight: bold;
    color: ${colors.darkgray};
`;

export const LocationContainer = styled.TouchableOpacity`
    backgroundColor: ${colors.white};
    marginTop: 20px;
    borderRadius: 12px;
    height: 100px;
    flexDirection: row;
    justifyContent: flex-end;
    alignItems: flex-end;
`;

export const LocationImage = styled.Image`
    width: 50%;
    borderRadius: 12px;
`;

export const LocationText = styled.Text`
    color: ${colors.darkgray};
    fontSize: 26px;
    width: 50%;
    alignSelf: center;
    marginBottom: 10px;
    fontWeight: bold;
`;

export const ExerciseContainer = styled.TouchableOpacity`
    height: 220px;
    backgroundColor: ${colors.white};
    borderRadius: 12px;
    marginLeft: 20px;
`;

export const ExerciseTitle = styled.Text`
    color: ${colors.darkgray};
    fontSize: 28px;
    marginLeft: 20px;
    marginTop: 10px;
    fontWeight: bold;
`;

export const ExerciseImage = styled.Image`
    alignSelf: flex-end;
    height: 100px;
    width
`;

export const LightLevelContainer = styled.View`
    marginTop: 20px;
    backgroundColor: ${colors.darkgray};
    flexDirection: row;
    padding: 10px;
    borderRadius: 12px;
`;

export const LightLevelIcon = styled.Image`
    marginLeft: 5px;
`;

export const LightLevelText = styled.Text`
    color: ${colors.primary};
    fontWeight: bold;
    textAlign: center;
    width: 80%;
`;
