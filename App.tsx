import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'
import MusicPlayer from './src/MusicPlayer/MusicPlayer'

export const ArrayScreens: string[] = [
  'MusicPlayer',
]


const AppNavigator = createSwitchNavigator(
  {
    MainNavigatorScreen,

    MusicPlayer
  },
  {
    initialRouteName: 'MainNavigatorScreen',
  }
);


export default createAppContainer(AppNavigator);
