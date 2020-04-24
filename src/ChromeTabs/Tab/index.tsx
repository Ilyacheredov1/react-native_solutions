import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from './styles'

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get("window").width / TAB_COLUMNS;


interface Props {

}

const Tab: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
        </View>
    )
};

export default React.memo(Tab);
