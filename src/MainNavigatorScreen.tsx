import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const styles: any = {
    wrapper: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        color: '#fff'
    }
}

//@ts-ignore
function MainNavigatorScreen({ navigation }) {
    return (
        <View style={styles.wrapper} >

            <TouchableOpacity onPress={() => navigation.navigate('Test1')} >
                <Text style={styles.button} >Test 2</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MainNavigatorScreen
