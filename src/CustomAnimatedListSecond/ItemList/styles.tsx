import { Dimensions, StyleSheet, TextStyle, ViewStyle, } from "react-native";
import { heightItem } from "../helpers";
import { currentWidth } from "../../utils";

interface Styles {
    wrapper: ViewStyle
    title: TextStyle
    removeText: TextStyle
}

const styles = (): Styles => ({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: currentWidth / 2,
        height: heightItem,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#111'
    },
    title: {
        fontSize: 40,
        color: '#FFF',
    },
    removeText: {
        fontSize: 20,
        color: '#FFF',
    }
});

const style = StyleSheet.create(styles());
export default style;
