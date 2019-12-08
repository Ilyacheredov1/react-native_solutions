import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Navigator = ({ navigation }) => {

    return (
        <View style={styles.container} >

            <TouchableOpacity onPress={() => navigation.navigate('Circle')} >
                <Text style={styles.button}>Circle</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ProgressBar')} >
                <Text style={styles.button}>ProgressBar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('test')} >
                <Text style={styles.button}>test</Text>
            </TouchableOpacity>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        color: 'blue',
        fontSize: 25,
        marginTop: 10
    }
})

export default Navigator
