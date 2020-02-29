import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";
import axios from 'axios'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const TestFunction: React.FC<Props> = () => {

    const [state, setstate] = useState<number>(2);
    const [fetchedTest, setFetchedTest] = useState<string>('')

    useEffect(() => {
        ; (async () => {
            interface IResponce {
                test: string
            }

            try {
                const response = await axios.get('https://raw.githubusercontent.com/Ilyacheredov1/react-native_solutions/master/src/Test/FetchedDatas.json')
                console.log(response);
                setFetchedTest(response.data.test);
            } catch (error) {
                console.error(error);
            }

        })();
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Function Component</Text>
            <Text style={styles.title}>{state}</Text>
            <Button onPress={() => setstate(state + 2)} title="raise" />
            <Text>{fetchedTest}</Text>
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
