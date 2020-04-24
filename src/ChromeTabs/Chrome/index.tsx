import React from 'react'
import {View, Text, Dimensions, } from 'react-native'
import styles from './styles'
import SortableTab from "../SortableTab";
import Tab from "../Tab";
import {IOffsets, TAB_COLUMNS, TAB_SIZE, tabs} from "../helpres";
import Animated from "react-native-reanimated";

const Value = Animated.Value;


interface Props {

}

const Chrome: React.FC<Props> = () => {

    const offsets: IOffsets[] = tabs.map((tab, index) => ({
        x: new Value(index % TAB_COLUMNS === 0 ? 0 : TAB_SIZE ) ,
        y: new Value(Math.floor(index / TAB_COLUMNS) * TAB_SIZE),
    }))

    return (
        <View style={styles.wrapper}>
            {tabs.map((item, index: number) => (
                <SortableTab
                    key={item}
                    item={item}
                    offsets={offsets}
                />
            ))}
        </View>
    )
};

export default React.memo(Chrome);
