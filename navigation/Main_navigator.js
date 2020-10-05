import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import login from '../screens/authentication/login';
import register from '../screens/authentication/register';
import colors from '../constants/colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: colors.header,
  },
  headerTintColor: 'white',
};
const Auth = createStackNavigator(
  {
    Login: login,
    Register: register,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  },
);

export default createAppContainer(Auth);
