import React, { useState, useEffect, version } from 'react'
import { ScrollView, View, Text, StyleSheet, Animated, ViewStyle, PanResponder, PanResponderStatic, PanResponderInstance } from 'react-native';

const Decay = () => {

    const [animation, setAnimation] = useState<Animated.ValueXY>(
        new Animated.ValueXY({ x: 0, y: 0 })
    );

    let _x: number = 0;
    let _y: number = 0;

    animation.addListener((value) => {
        _x = value.x;
        _y = value.y;
    });

    let _panPersonder: PanResponderInstance = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            animation.setOffset({
                x: _x,
                y: _y
            });
            animation.setValue({
                x: 0,
                y: 0
            })
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: animation.x,
                dy: animation.y,
            },
        ]),
        onPanResponderRelease: (e, { vx, vy }) => {
            Animated.decay(animation, {
                velocity: { x: vx, y: vy }, // скорость
                deceleration: 0.997,  // замедление
            }).start();
        }
    });

    // useEffect(() => {
    //     _panPersonder = 
    // }, []);

    const animatedStyle: ViewStyle = {
        //@ts-ignore
        transform: animation.getTranslateTransform(),
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.box, animatedStyle]}
                {..._panPersonder.panHandlers}
            >
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'tomato'
    },
    content: {
        height: 1500,
        width: 500,
    }
});

export default Decay
