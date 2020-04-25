import { Dimensions, StyleSheet, TextStyle, ViewStyle, } from "react-native";
import { heightItem } from "../helpers";

interface Styles {
    wrapper: ViewStyle
    title: TextStyle
    removeText: TextStyle
}

const styles = (): Styles => ({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: heightItem,
        borderWidth: 2,
        borderColor: '#FFF',
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
