import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextStyle, ViewStyle } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

type State = {
    testState: number,
}


export default class Test extends React.Component<Props, {}> {
    state: State = {
        testState: 0,
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>Class Component</Text>
                <Text style={styles.title}>{this.state.testState}</Text>
                <Button
                    onPress={() => this.setState({ testState: this.state.testState + 5 })}
                    title="raise"
                />
            </View>
        )
    }
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

