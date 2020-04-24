import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from './styles'

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get("window").width / TAB_COLUMNS;


interface Props {

}

const index: React.FC<Props> = () => {
    return (
        <View>
        </View>
    )
};

export default React.memo(index);
