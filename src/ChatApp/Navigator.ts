import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChatScreen from './ChatScreen';
import LoginScreen from './LoginScreen';


const ChatAppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Chat: ChatScreen,
    },
    {
        initialRouteName: 'Chat',
        headerMode: 'none'
    }
);


export default createAppContainer(ChatAppNavigator)
