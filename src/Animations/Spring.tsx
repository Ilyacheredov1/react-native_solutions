import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from 'react-native'

const Animating_properties = () => {

    const [animation, setAnimation] = useState<any>(new Animated.Value(0));

    const startAnimation = () => {

        animation.addListener(({ value }: any) => console.log(value));

        Animated.spring(animation, {
            toValue: 1.3,
            friction: 2,
            tension: 160,
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 100,
            }).start()
        })
    };

    const animatedStyles = {
        transform: [
            {
                scale: animation
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
