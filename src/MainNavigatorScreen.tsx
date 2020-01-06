import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { ArrayScreens } from '../App'

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



interface Props {
    navigation: any
}

function MainNavigatorScreen({ navigation }: Props) {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }} >
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={styles.wrapper}>

                {
                    (ArrayScreens || []).map((it, i) => (
                        <TouchableOpacity key={it} onPress={() => navigation.navigate(it)} >
                            <Text style={styles.button}>{it}</Text>
                        </TouchableOpacity>
                    ))
                }

            </View>
        </ScrollView >
    )
}

export default MainNavigatorScreen
