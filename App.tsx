import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'
import Test1 from './src/Test1';

const AppNavigator = createSwitchNavigator(
  {
    MainNavigatorScreen: MainNavigatorScreen,
    Test1: Test1,
  },
  {
    initialRouteName: 'MainNavigatorScreen',
  }
);


export default createAppContainer(AppNavigator);
