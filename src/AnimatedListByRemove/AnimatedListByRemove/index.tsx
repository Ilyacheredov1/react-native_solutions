import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions, ScrollView,} from 'react-native'
import styles from './styles'
import {IOffsets, TAB_COLUMNS, TAB_SIZE, tabs} from "../helpers";
import Animated from "react-native-reanimated";
import ItemList from "../ItemList";

const Value = Animated.Value;

const getOffsets = (tabsArg: number[]) => {
    const newOffsets: IOffsets[] = tabsArg.map((tab, index) => ({
        x: new Value(index % TAB_COLUMNS === 0 ? 0 : TAB_SIZE),
        y: new Value(Math.floor(index / TAB_COLUMNS) * TAB_SIZE),
    }));

    console.log('newOffsets', newOffsets)
    return newOffsets;
}


interface Props {

}

const AnimatedListByRemove: React.FC<Props> = () => {

    const [tabs, setTabs] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
    const [offsets, setOffsets] = useState<IOffsets[]>(getOffsets(tabs));


    const handleDeleteTab = (index: number) => {
        let tabsClone = [...tabs];
        tabsClone = tabsClone.filter((item: number) => item !== index);
        console.log('tabsClone', tabsClone);
        setOffsets(getOffsets(tabsClone));
        setTabs(tabsClone);
    }

    return (
        <ScrollView style={styles.wrapper}>
            <View style={{height: Dimensions.get("window").height * 2}}/>
            {tabs.map((item, index: number) => (
                <ItemList
                    key={item}
                    item={item}
                    offsets={offsets}
                    handleDeleteTab={(index => handleDeleteTab(index))}
                />
            ))}
        </ScrollView>
    )
};

export default React.memo(AnimatedListByRemove);
