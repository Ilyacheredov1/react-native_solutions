import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
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



//@ts-ignore
function MainNavigatorScreen({ navigation }) {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }} >
            <View style={styles.wrapper}>

                {
                    (ArrayScreens || []).map((it, i) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate(it)} >
                                <Text style={styles.button} >{it}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        </ScrollView >
    )
}

export default MainNavigatorScreen
