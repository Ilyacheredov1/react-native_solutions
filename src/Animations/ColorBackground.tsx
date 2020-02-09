import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'


const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(0));

    const startAnimation = () => {
        console.log('animation.Value', animation);

        if (animation._value === 0) {
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
            }).start();
        } else {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1000,
            }).start();
        }

    }

    const wrapperInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', 'black']
    });

    const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['black', 'white']
    })

    const colorInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', 'black']
    })


    const boxAnimatedStyle = {
        backgroundColor: boxInterpolation
    }

    const textAnimatedStyle = {
        color: colorInterpolation
    }

    const wrapperStyle = {
        backgroundColor: wrapperInterpolation
    }

    return (
        <Animated.View style={[styles.container, wrapperStyle]}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, boxAnimatedStyle]} >
                    <Animated.Text style={textAnimatedStyle}>
                        Color Animation
                    </Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Animating_properties
