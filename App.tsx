import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'

import MusicPlayer from './src/MusicPlayer/MusicPlayer'
import Accordion from './src/AnimatedList/Accordion'
import ChatApp from './src/ChatApp/ChatScreen'
import Animations from './src/Animations/Navigator/Navigator'
import Calendars from './src/Calendars/Navigator/index';

export const ArrayScreens: string[] = [
  'MusicPlayer',
  'Accordion',
  'ChatApp',
  'Animations',
  'Calendars',
]


const AppNavigator = createStackNavigator(
  {
    MainNavigatorScreen,

    MusicPlayer,
    Accordion,
    ChatApp,
    Animations,
    Calendars,
  },
  {
    initialRouteName: 'MainNavigatorScreen',
    headerMode: 'none'
  }
);


export default createAppContainer(AppNavigator);
