import React from 'react';

import { 
  Container, 
  ToggleButton,
  ToggleIcon,
  ContainerImage,
  CardPatient,
  IconPatient,
  NamePatient,
  ViewLeft,
  CaseBpm
} from './styles';

import ToggleImage from '../../assets/icons/toggle.png';
import BackgroundHome from '../../assets/img/home_background.png';
import OldMan from '../../assets/img/oldMan.png';

const Home = ({ navigation }) => {

  return (
      <Container>
        <ContainerImage source={BackgroundHome}>

          <ToggleButton>
            <ToggleIcon source={ToggleImage}/>
          </ToggleButton>
          <CardPatient>
            <IconPatient source={OldMan}/>
            <ViewLeft>
              <NamePatient>Adailton, 76</NamePatient>
              <CaseBpm>

              </CaseBpm>
            </ViewLeft>
          </CardPatient>

        </ContainerImage>
      </Container>
  );
};

export default Home;
