import React from 'react'
import {View, Text, TouchableOpacity, ScrollView, StatusBar, FlatList} from 'react-native'
import {NavigationParams, NavigationScreenProp, NavigationState,} from "react-navigation";
import {ArrayScreens} from '../App'


interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const MainNavigatorScreen: React.FC<IProps> = ({navigation}) => {

    const renderItem = (item: string) => (
        <TouchableOpacity onPress={() => navigation.navigate(item)}>
            <Text style={styles.button}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.wrapper}>
            <StatusBar backgroundColor="#000" barStyle="light-content"/>
            <FlatList
                data={ArrayScreens}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item) => item}
            />
        </View>
    )
}


const styles: any = {
    wrapper: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: '#fff',
        marginVertical: 15,
        fontSize: 20,
        textAlign: 'center',
    }
}


export default React.memo(MainNavigatorScreen);
