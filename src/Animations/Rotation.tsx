import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'


const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(0));

    const startAnimation = () => {
        if (animation._value === 0) {
            Animated.timing(animation, {
                toValue: 360,
                duration: 1000,
            }).start();
        } else {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1000,
            }).start();
        }
    }

    const boxInterpolation = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const boxAnimatedStyle = {
        transform: [
            {
                rotate: boxInterpolation
            }
        ]
    }


    return (
        <Animated.View style={[styles.container,]}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, boxAnimatedStyle]} >
                    <Animated.Text style={styles.textStyle}>
                        Animation
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
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#fff'
    }
});

export default Animating_properties
