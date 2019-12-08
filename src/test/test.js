import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class test extends Component {

    componentDidMount() {
        this.testFunction()
    }


    testFunction() {
        console.log('testFunction')
    }

    render() {
        return (
            <View>
                <Text> Test </Text>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                    <Text>this.props.navigation.goBack()</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Navigator')} >
                    <Text>this.props.navigation.navigate('Navigator')</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
