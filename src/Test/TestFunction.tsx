import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const TestFunction: React.FC<Props> = () => {

    const [state, setstate] = useState<number>(2);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Function Component</Text>
            <Text style={styles.title}>{state}</Text>
            <Button onPress={() => setstate(state + 2)} title="raise" />
        </View>
    )
}

interface style {
    wrapper: ViewStyle
    title: TextStyle
}

const styles: style = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: 10,
        fontSize: 30,
        alignItems: 'center'
    }
})

export default TestFunction
