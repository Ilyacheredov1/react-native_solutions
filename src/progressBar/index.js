import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress';


export default class index extends Component {
    render() {
        return (
            <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 30, justifyContent: 'center', marginVertical: 20 }}>
                    Progress Bars
                </Text>

                <Progress.Bar
                    width={350}
                    height={19}
                    borderRadius={50}
                    progress={0.25}
                    animated={true}
                    //indeterminate={true}
                    //indeterminateAnimationDuration={3000}
                    color={'#007AFF'}
                //unfilledColor={'red'}
                />

                {/* <Progress.Bar progress={0.3} width={200} />
                <Progress.Pie progress={0.4} size={50} /> */}
                {/* <Progress.Circle size={30} indeterminate={true} />
                <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({})

