import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
// @ts-ignore
import Slider from 'react-native-slider'
// import Slider from '@react-native-community/slider';
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationParams, NavigationScreenProp, NavigationState, } from "react-navigation";

const screenHeight = Math.round(Dimensions.get('window').height);
console.log(screenHeight);


interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const MusicPlayer: React.FC<IProps> = ({ navigation }) => {

    const [TrackLength, setTrackLength] = useState<number>(252);
    const [TimeElapsed, setTimeElapsed] = useState<string>("0:00");
    const [TimeRemaining, setTimeRemaining] = useState<string>("4:12");

    const changeTime = (seconds: number) => {
        setTimeElapsed(Moment.utc(seconds * 1000).format("m:ss"));
        setTimeRemaining(Moment.utc((TrackLength - seconds) * 1000).format("m:ss"));
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />

            <View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Text style={[styles.textDark, { fontSize: 12 }]}>PLAYLIST</Text>
                    </View>

                    <View style={styles.coverContainer}>
                        <Image source={require('./assets/coverArt.jpg')} style={styles.image}></Image>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 32 }}>
                        <Text style={[styles.textMain, styles.nameSong]}>Babushka Boi</Text>
                        <Text style={[styles.text, styles.nameArtist]}>A$AP Rocky</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{ marginHorizontal: 32 }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={TrackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="aqua"
                        onValueChange={changeTime}
                    />

                    <View style={styles.timeWrapper}>
                        <Text style={[styles.textDark, styles.timeStamp]}>{TimeElapsed}</Text>
                        <Text style={[styles.textDark, styles.timeStamp]}>{TimeRemaining}</Text>
                    </View>
                </View>

                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainNavigatorScreen')}>
                        <Icon name="backward" size={32} color="#e3e3e3" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.playButtonContainer}>
                        <Icon name="play" size={32} color="#e3e3e3" style={styles.playButton} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="forward" size={32} color="#e3e3e3" />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        color: '#999999'
    },
    textDark: {
        color: '#6b6b6b'
    },
    textMain: {
        color: '#e3e3e3'
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15, width: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    nameSong: { fontSize: 20, fontWeight: '500' },
    nameArtist: { fontSize: 16, marginTop: 8 },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#2b2b2b"
    },
    thumb: {
        // width: 18,
        // height: 18,
        backgroundColor: "#bdbbbb"
    },
    timeWrapper: {
        marginTop: -8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: screenHeight > 700 ? 30 : 5
    },
    playButtonContainer: {
        backgroundColor: '#000',
        borderColor: '#1a1a1a',
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 22,
        shadowColor: 'aqua',
        shadowRadius: 30,
        shadowOpacity: 0.5,
    },
    playButton: {
        marginLeft: 7
    }
})


export default MusicPlayer;