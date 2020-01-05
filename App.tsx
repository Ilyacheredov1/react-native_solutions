import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'
import SpotifyScrollable from './src/SpotifyScrollable/SpotifyScrollable';

export const ArrayScreens: string[] = [
  'SpotifyScrollable',
]


const AppNavigator = createSwitchNavigator(
  {
    MainNavigatorScreen,

    SpotifyScrollable
  },
  {
    initialRouteName: 'MainNavigatorScreen',
  }
);


export default createAppContainer(AppNavigator);
