import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";
import { GiftedChat } from 'react-native-gifted-chat';

interface IUser {
    _id: number
    name: string,
    avatar: string
}

interface IMessage {
    _id: number
    text: string
    createdAt: Date
    user: IUser
}

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const ChatScreen: React.FC<IProps> = ({ navigation }) => {

    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
    ]);


    const onSend = (newMessages = []) => setMessages(GiftedChat.append(messages, newMessages))


    return (
        <GiftedChat
            messages={messages}
            //@ts-ignore
            onSend={onSend}
            user={{
                _id: 1,
            }}
        />
    )
}

export default ChatScreen
