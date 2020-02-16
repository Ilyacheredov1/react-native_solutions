import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

const Animating_properties = () => {

    const [colorAnimation] = useState<Animated.Value>(new Animated.Value(0));
    const [scaleAnimation] = useState<Animated.Value>(new Animated.Value(1));

    const handlePress = () => {

        // Выполняется параллельно

        // Animated.parallel([
        //     Animated.timing(colorAnimation, {
        //         toValue: 1,
        //         duration: 500,
        //     }),
        //     Animated.timing(scaleAnimation, {
        //         toValue: 2,
        //         duration: 300
        //     }),
        // ]).start();


        // Выполняется последовательно

        Animated.sequence([
            Animated.timing(colorAnimation, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(scaleAnimation, {
                toValue: 2,
                duration: 300
            }),
        ]).start();

    }

    const backgroundInterpolate = colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['red', 'blue']
    });

    const boxStyle = {
        backgroundColor: backgroundInterpolate,
        transform: [
            {
                scale: scaleAnimation
            }
        ],
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <Animated.View style={[styles.box, boxStyle]} />
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
