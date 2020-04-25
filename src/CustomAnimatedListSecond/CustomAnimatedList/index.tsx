import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
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
for (let i = 0; i < 20; i += 2) {
    oddListStart.push({ index: i, topOffset: ((i + 2) * heightListItem / 2) });
}
for (let i = 1; i < 20; i += 2) {
    evenListStart.push({ index: i, topOffset: ((i + 1) * heightListItem / 2)  });
}

interface Props {
}

const CustomAnimatedListSecond: React.FC<Props> = () => {

    const [evenList, setEvenList] = useState<IItem[]>(evenListStart);
    const [oddList, setOddList] = useState<IItem[]>(oddListStart);


    const handleDelete = (index: number) => {
        const handle = (list: IItem[]) => {
            let listClone: IItem[] = [...list];
            listClone = listClone.filter((item: IItem) => item.index !== index);

            listClone = listClone.map((item, index) => {
                return {
                    index: item.index,
                    topOffset: (index + 1) * heightListItem
                }
            });
            return listClone
        };

        if (index % 2 !== 0) {
            setEvenList(handle(evenList))
        } else {
            setOddList(handle([...oddList]))
        }

    };

    return (
        <ScrollView style={styles.wrapper}>
            <SafeAreaView style={styles.listWrapper}>
                <View>
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
                </View>
                <View style={{
                    transform: [{ translateX: currentWidth / 2 }]
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
                </View>
            </SafeAreaView>

        </ScrollView>
    )
};

export default React.memo(CustomAnimatedListSecond);

