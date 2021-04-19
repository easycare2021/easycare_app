import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '~/pages/Home';
import Patient from '~/pages/Patient';

import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Drawer.Navigator drawerStyle={{ width: '85%'}} drawerContent={ props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Patient" component={Patient} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
