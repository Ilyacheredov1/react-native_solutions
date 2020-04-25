import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import MainNavigatorScreen from './src/MainNavigatorScreen'
import MusicPlayer from './src/MusicPlayer/MusicPlayer'
import Accordion from './src/AnimatedList/Accordion'
import ChatApp from './src/ChatApp/ChatScreen'
import Animations from './src/Animations/Navigator/Navigator'
import Calendars from './src/Calendars/Navigator/index';
import Chrome from "./src/ChromeTabs/Chrome";
import AnimatedListByRemove from "./src/AnimatedListByRemove/AnimatedListByRemove";
import CustomAnimatedList from "./src/CustomAnimatedList/CustomAnimatedList";
import CustomAnimatedListSecond from './src/CustomAnimatedListSecond/CustomAnimatedList/index'

export const ArrayScreens: string[] = [
    'MusicPlayer',
    'Accordion',
    'ChatApp',
    'Animations',
    'Calendars',
    'Chrome',
    // 'AnimatedListByRemove',
    'CustomAnimatedList',
    'CustomAnimatedListSecond',
];


const AppNavigator = createStackNavigator(
    {
        MainNavigatorScreen,

        MusicPlayer,
        Accordion,
        ChatApp,
        Animations,
        Calendars,
        Chrome,
        // AnimatedListByRemove,
        CustomAnimatedList,
        CustomAnimatedListSecond
    },
    {
        // initialRouteName: 'CustomAnimatedList',
        headerMode: 'none'
    }
);


export default createAppContainer(AppNavigator);
