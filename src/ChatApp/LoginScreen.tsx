import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform, Image, } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";


interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const LoginScreen: React.FC<IProps> = ({ navigation }) => {

    const [name, setName] = useState<string>('');

    const continueMethod = () => {
        navigation.navigate('Chat', { name })
    }


    return (
        <View style={styles.container}>
            <View style={styles.circle} />

            <View style={{ marginTop: 64 }}>
                <Image source={require('')} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        left: -120,
        top: -20,


    }


})

export default LoginScreen
