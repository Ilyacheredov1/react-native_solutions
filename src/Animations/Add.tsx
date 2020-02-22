import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

const Animating_properties = () => {

    const [animation] = useState<Animated.Value>(new Animated.Value(0));

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 300,
            duration: 1500
        }).start(() => {
            animation.setValue(0)
        });
    }

    const randomValue: Animated.Value = new Animated.Value(100);

    const newAnimation = Animated.add(animation, randomValue)

    const animatedStyles = {
        transform: [
            {
                translateY: newAnimation
            }
        ]
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
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    },
});

export default Animating_properties
