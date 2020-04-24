import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from './styles'




interface Props {
    item: number
}

const Tab: React.FC<Props> = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {item}
            </Text>
        </View>
    )
};

export default React.memo(Tab);
