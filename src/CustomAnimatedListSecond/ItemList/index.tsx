import React, { useEffect, useState } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { heightItem } from "../helpers";

const getOffset = (item: number) => {
    return item * heightItem;
};


interface Props {
    index: number
    topOffsetProp: number
    handleDelete: (index: number) => void
}

const ItemList: React.FC<Props> = (
    {
        index,
        topOffsetProp,
        handleDelete
    }) => {

    const [topOffset] = useState<Animated.Value>(new Animated.Value(topOffsetProp));

    useEffect(() => {
        console.log(index, 'topOffsetProp', topOffsetProp);

        Animated.timing(topOffset, {
            toValue: topOffsetProp - 100,
            duration: 350,
            useNativeDriver: true,
        }).start();

    }, [topOffsetProp]);

    return  (
        <Animated.View style={{
            position: 'absolute',
            transform: [{ translateY: topOffset }]
        }}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    {index}
                </Text>
                <TouchableOpacity onPress={() => handleDelete(index)}>
                    <Text style={styles.removeText}>
                        delete
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
};

export default React.memo(ItemList);
