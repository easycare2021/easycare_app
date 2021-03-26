import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { WelcomeStack } from './navigation/StackNavigator';

import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
};

export default App;
