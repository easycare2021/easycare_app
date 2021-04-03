import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Username from './Username';
import Email from './Email';
import Password from './Password';
import Name from './Name';
import Document from './Document';
import Phone from './Phone';
import Photo from './Photo';
import ConfirmPhoto from './ConfirmPhoto';
import Gender from './Gender';

const Stack = createStackNavigator();

export const SignUp = () => {
  return (
    <Stack.Navigator initialRouteName="Username" headerMode="none">
      <Stack.Screen name="Username" component={Username} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="ConfirmPhoto" component={ConfirmPhoto} />
      <Stack.Screen name="Gender" component={Gender} />
    </Stack.Navigator>
  );
};

export default SignUp;
