import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle,} from "react-native";
import {TAB_SIZE} from "../helpres";



interface Styles {
    container: ViewStyle
    image: ImageStyle
    title: TextStyle
}

const styles = (): Styles => ({
    container: {
        width: TAB_SIZE - 35,
        height: TAB_SIZE - 35,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#000'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 16,
        margin: 16,
    },
    title: {
        fontSize: 50,

    }

});

const style = StyleSheet.create(styles());
export default style;
