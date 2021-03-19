import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TouchID from './pages/TouchID';
import Home from './pages/Home';

import Toast from 'react-native-toast-message';

const AppNavigator = createStackNavigator(
    {
      Welcome: Welcome,
      SignIn: SignIn,
      SignUp: SignUp,
      TouchID: TouchID,
      Home: Home,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: { headerShown: false },
    },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {

  return (
    <>
      <AppContainer/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
