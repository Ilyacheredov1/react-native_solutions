import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(1));

    const animatedStyles = {
        transform: [
            {
                scaleY: animation
            }
        ]
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 1500,
        }).start();
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
