import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'

import MusicPlayer from './src/MusicPlayer/MusicPlayer'
import Accordion from './src/AnimatedList/Accordion'

export const ArrayScreens: string[] = [
  'MusicPlayer',
  'Accordion',
]


const AppNavigator = createSwitchNavigator(
  {
    MainNavigatorScreen,

    MusicPlayer,
    Accordion
  },
  {
    initialRouteName: 'MainNavigatorScreen',
  }
);


export default createAppContainer(AppNavigator);
