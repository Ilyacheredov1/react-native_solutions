import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './styles'

const list = [0,1,2,3,4,5,6]

interface Props {

}

const CustomAnimatedList: React.FC<Props> = () => {
    return (
        <ScrollView style={styles.wrapper}>
        </ScrollView>
    )
};

export default React.memo(CustomAnimatedList);

