import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from 'react-native'

const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(0));

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 300,
            duration: 1500,
            // easing: Easing.back(5),
            // easing: Easing.bounce,
            // easing: Easing.elastic(3),
            easing: Easing.bezier(.06, 1, .86, .23)

        }).start(() => {
            animation.setValue(0)
        });
    }

    const animatedStyles = {
        transform: [
            {
                translateY: animation
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
        justifyContent: 'center'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'tomato'
    },
});

export default Animating_properties
