import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flexDirection: column;
`;

export const ContainerImage = styled.ImageBackground`
    width:  100%;
    height: 100%;
`;

export const ToggleButton = styled.View`
    margin: 5%;
    width: 50px;
    height: 50px;
`;

export const ToggleIcon = styled.Image`
    marginTop: 25%;
    alignSelf: center;
    alignItems: center;
`;

export const CardPatient = styled.View`
    margin: 20px;
    height: 100px;
    padding: 12px;
    borderRadius: 12px;
    shadowColor: #000;
    shadowOffset: { width: 1, height: 1 };
    shadowOpacity: 0.8;
    elevation: 5
    backgroundColor: white;
    flexDirection: row;
    flex-wrap: wrap;
    
    justifyContent: space-between;
`;

export const IconPatient = styled.Image`
    width: 75px;
    height: 75px;
    borderRadius: 50px;
    border: 4px solid #3F3D56;
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
    fontWeight: bold;
    fontSize: 20px
`;

export const CaseBpm = styled.View`
    width: 75px;
    height: 75px;
    backgroundColor: blue;
    justifyContent: flex-end;
`;