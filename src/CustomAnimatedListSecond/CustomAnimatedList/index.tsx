import React, { useState } from 'react'
import { Animated, ScrollView, View } from 'react-native'
import styles from './styles'
import ItemList from "../ItemList";
import { currentWidth } from "../../utils";

export interface IItem {
    index: number
    topOffset: number
}

export const heightListItem = 100;

const oddListStart: IItem[] = [];
const evenListStart: IItem[] = [];
for (let i = 0; i < 10; i += 2) {
    oddListStart.push({ index: i, topOffset: ((i + 2) * heightListItem / 2) });
}
for (let i = 1; i < 8; i += 2) {
    evenListStart.push({ index: i, topOffset: ((i + 1) * heightListItem / 2) });
}

interface Props {
}

const CustomAnimatedListSecond: React.FC<Props> = () => {

    const [oddList, setOddList] = useState<IItem[]>(oddListStart);
    const [evenList, setEvenList] = useState<IItem[]>(evenListStart);

    const [oddListOffset] = useState<Animated.Value>(new Animated.Value(currentWidth / 2));
    const [evenListOffset] = useState<Animated.Value>(new Animated.Value(0));
    const [posColumn, setPosColumn] = useState<'left' | 'right'>("left");

    const changePosition = () => {
        if (posColumn === "left") {
            Animated.timing(oddListOffset, {
                toValue: 0,
                duration: 350,
                useNativeDriver: true,
            }).start();
            Animated.timing(evenListOffset, {
                toValue: currentWidth / 2,
                duration: 350,
                useNativeDriver: true,
            }).start();
            setPosColumn("right");
        } else {
            Animated.timing(oddListOffset, {
                toValue: currentWidth / 2,
                duration: 350,
                useNativeDriver: true,
            }).start();
            Animated.timing(evenListOffset, {
                toValue: 0,
                duration: 350,
                useNativeDriver: true,
            }).start();
            setPosColumn("left");
        }
    };

    const handleDelete = (index: number) => {
        const removeItem = (list: IItem[]) => {
            let listClone: IItem[] = [...list];
            listClone = listClone.filter((item: IItem) => item.index !== index);

            listClone = listClone.map((item, index) => ({
                index: item.index,
                topOffset: (index + 1) * heightListItem,
            }));
            return listClone;
        };

        index % 2 !== 0
            ? setEvenList(removeItem(evenList))
            : setOddList(removeItem([...oddList]));

        changePosition();
    };

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.listWrapper}>
                <View style={{ height: heightListItem * 10 }}/>
                <Animated.View style={{
                    transform: [{ translateX: oddListOffset }]
                }}>
                    {
                        oddList.map(({ index, topOffset }) => (
                            <ItemList
                                key={index}
                                index={index}
                                topOffsetProp={topOffset}
                                handleDelete={(index: number) => handleDelete(index)}
                            />
                        ))
                    }
                </Animated.View>
                <Animated.View style={{
                    transform: [{ translateX: evenListOffset }]
                }}>
                    {
                        evenList.map(({ index, topOffset }) => (
                            <ItemList
                                key={index}
                                index={index}
                                topOffsetProp={topOffset}
                                handleDelete={(index: number) => handleDelete(index)}
                            />
                        ))
                    }
                </Animated.View>
            </View>

        </ScrollView>
    )
};

export default React.memo(CustomAnimatedListSecond);

