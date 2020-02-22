import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";
import { ArrayScreens } from './index'


interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const MainNavigatorScreen: React.FC<IProps> = ({ navigation }) => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }} >
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={styles.wrapper}>

                {
                    (ArrayScreens || []).map((item, ) => (
                        <TouchableOpacity key={item} onPress={() => navigation.navigate(item)} >
                            <Text style={styles.button}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }

            </View>
        </ScrollView >
    )
}


const styles: any = {
    wrapper: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    button: {
        color: '#fff',
        margin: 15,
        fontSize: 20,
    }
}



export default MainNavigatorScreen
