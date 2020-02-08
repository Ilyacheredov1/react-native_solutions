import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import 'react-native-gesture-handler';

import MainNavigatorScreen from './src/MainNavigatorScreen'

import MusicPlayer from './src/MusicPlayer/MusicPlayer'
import Accordion from './src/AnimatedList/Accordion'
import ChatApp from './src/ChatApp/ChatScreen'
import Animation from './src/Animations/Scale'

export const ArrayScreens: string[] = [
  'MusicPlayer',
  'Accordion',
  'ChatApp',
  'Animation'
]


const AppNavigator = createStackNavigator(
  {
    MainNavigatorScreen,

    MusicPlayer,
    Accordion,
    ChatApp,
    Animation
  },
  {
    initialRouteName: 'Animation',
    headerMode: 'none'
  }
);


export default createAppContainer(AppNavigator);
