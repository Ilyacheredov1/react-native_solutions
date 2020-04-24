import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import SortableTab from "../SortableTab";


interface Props {

}

const Chrome: React.FC<Props> = () => {
    return (
        <View style={styles.wrapper}>
            <SortableTab />
        </View>
    )
};

export default React.memo(Chrome);
