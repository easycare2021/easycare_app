import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import TouchID from '../pages/TouchID';
import Patient from '../pages/Patient';

import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();

const WelcomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="TouchID" component={TouchID} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="Patient" component={Patient} />
        </Stack.Navigator>
    );
};

export { WelcomeStack, HomeStack };
