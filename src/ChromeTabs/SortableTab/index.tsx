import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Tab from "../Tab";


interface Props {

}

const SortableTab: React.FC<Props> = () => {
    return (
        <View style={styles.wrapper}>
            <Tab />
        </View>
    )
};

export default React.memo(SortableTab);
