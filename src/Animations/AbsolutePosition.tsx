import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

const Animating_properties = () => {

    const [animation, setAnimation] = useState<Animated.Value>(new Animated.Value(0));

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 200,
            duration: 1500,
        }).start();
    }

    const animatedStyles = {
        top: animation,
        left: animation,
        right: animation,
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, animatedStyles]} />
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    },
});

export default Animating_properties
