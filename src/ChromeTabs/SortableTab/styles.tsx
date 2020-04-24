import {StyleSheet, ViewStyle,} from "react-native";

interface Styles {
    wrapper: ViewStyle
}

const styles = (): Styles => ({
    wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
    }

});

const style = StyleSheet.create(styles());
export default style;
