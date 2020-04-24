import React from 'react'
import {View, Text, Dimensions, } from 'react-native'
import styles from './styles'
import {IOffsets, TAB_COLUMNS, TAB_SIZE, tabs} from "../helpers";
import Animated from "react-native-reanimated";
import ItemList from "../ItemList";

const Value = Animated.Value;


interface Props {

}

const AnimatedListByRemove: React.FC<Props> = () => {

    const offsets: IOffsets[] = tabs.map((tab, index) => ({
        x: new Value(index % TAB_COLUMNS === 0 ? 0 : TAB_SIZE ) ,
        y: new Value(Math.floor(index / TAB_COLUMNS) * TAB_SIZE),
    }))

    return (
        <View style={styles.wrapper}>
            {tabs.map((item, index: number) => (
                <ItemList
                    key={item}
                    item={item}
                    offsets={offsets}
                />
            ))}
        </View>
    )
};

export default React.memo(AnimatedListByRemove);
