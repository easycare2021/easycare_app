import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppNavigator = createStackNavigator(
    {
      Welcome: Welcome,
      SignIn: SignIn,
      SignUp: SignUp,
    },
    {
      initialRouteName: 'Welcome',
      defaultNavigationOptions: { headerShown: false }
    },
);
  
export default createAppContainer(AppNavigator);
