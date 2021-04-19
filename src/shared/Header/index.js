import React from 'react';

import { Container, Toggle } from './styles';

import { ToggleIcon } from '~/assets';

const Header = ({ navigation }) => {
  return (
    <Container onPress={() => navigation.toggleDrawer()}>
        <Toggle source={ToggleIcon}/>
    </Container>
  );
};

export default Header;
