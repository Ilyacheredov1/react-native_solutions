import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import styles from './styles'
import ItemList from "../ItemList";

export interface IItem {
    index: number
    topOffset: number
}

const listStart: IItem[] = [];
for (let i = 0; i < 10; i++) {
    listStart.push({ index: i, topOffset: i * 100 });
}

interface Props {
}

const CustomAnimatedList: React.FC<Props> = () => {

    const [list, setList] = useState<IItem[]>(listStart);

    const handleDelete = (index: number) => {
        let listClone: IItem[] = [...list];
        listClone = listClone.filter((item: IItem) => item.index !== index);

        listClone = listClone.map((item, index) => {
            return {
                index: item.index,
                topOffset: index * 100
            }
        });

        setList(listClone);
        console.log('listClone', listClone)
    };

    return (
        <ScrollView style={styles.wrapper}>
            {
                list.map(({ index, topOffset }) => (
                    <ItemList
                        key={index}
                        index={index}
                        topOffsetProp={topOffset}
                        handleDelete={(index: number) => handleDelete(index)}
                    />
                ))
            }
        </ScrollView>
    )
};

export default CustomAnimatedList;

