import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeStack } from './navigation/StackNavigator';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './store';
import GlobalFont from 'react-native-global-font';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const App = () => {
  useEffect(() => {
    GlobalFont.applyGlobal('Raleway-Regular');

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
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
