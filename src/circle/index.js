import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native';
//import CircularProgress from './CircularProgress';
import AnimatedCircularProgress from './AnimatedCircularProgress'



export default () => {
    return (
        <View style={{ margin: 25 }}>
            <Text style={{ fontSize: 30, color: 'black' }}>Circles</Text>
            <ScrollView>


                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    //backgroundWidth={10}
                    tintColor={'#a5a5a5'}
                    backgroundColor={'#555'}
                    fill={40}
                    rotation={0}
                />


                <AnimatedCircularProgress
                    size={200}
                    width={3}
                    backgroundWidth={30}
                    fill={100}
                    tintColor="#00e0ff" r
                    backgroundColor="#3d5875"
                />

                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    backgroundWidth={10}
                    fill={29}
                    tintColor="#007AFF"
                    backgroundColor="#707070"
                />

                <AnimatedCircularProgress
                    size={200}
                    width={3}
                    fill={75}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        (fill) => (
                            <Text>
                                {45}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>

                {/* <AnimatedCircularProgress
                        size={120}
                        width={15}
                        fill={100}
                        tintColor="#00e0ff"
                        backgroundColor="#3d5875"
                        padding={10}
                        renderCap={({ center }) => <Circle cx={50} cy={80} r="10" fill="blue" />}
                    /> */}



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
