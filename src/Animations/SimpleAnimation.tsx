import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(1));

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 350,
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500
            }).start()
        })
    }

    const animatedStyles = {
        opacity: animation
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
