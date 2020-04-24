import {ImageStyle, StyleSheet, ViewStyle,} from "react-native";
import {TAB_SIZE} from "./index";

interface Styles {
    container: ViewStyle
    image: ImageStyle
}

const styles = (): Styles => ({
    container: {
        width: TAB_SIZE,
        height: TAB_SIZE,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 20,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 16,
        margin: 16,
    },

});

const style = StyleSheet.create(styles());
export default style;
