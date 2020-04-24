import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import SortableTab from "../SortableTab";
import Tab from "../Tab";


interface Props {

}

const Chrome: React.FC<Props> = () => {
    return (
        <View style={styles.wrapper}>
            {[1, 2, 3, 4, 5].map((item) => (
                <SortableTab key={item}/>
            ))}
        </View>
    )
};

export default React.memo(Chrome);
