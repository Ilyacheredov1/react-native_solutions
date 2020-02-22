import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Animated, ViewStyle, } from 'react-native';

const Animating_properties = () => {

    const [animation, setAnimation] = useState<Animated.Value>(new Animated.Value(0));

    const backgroundInterpolate = animation.interpolate({
        inputRange: [0, 750],
        outputRange: ['black', 'aqua'],
    });

    const backgroundStyle = {
        backgroundColor: backgroundInterpolate,
    }

    const onScroll = Animated.event([
        {
            nativeEvent: {
                contentOffset: {
                    y: animation
                }
            }
        }
    ]);

    return (
        <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={onScroll}
            >
                <Animated.View style={[styles.content, backgroundStyle]} >
                    <Text>Scroll down</Text>
                </Animated.View>
            </ScrollView>
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
    content: {
        height: 1500,
        width: 500,
    }
});

export default Animating_properties
