import {Dimensions, StyleSheet, ViewStyle,} from "react-native";

interface Styles {
    wrapper: ViewStyle
}

const styles = (): Styles => ({
    wrapper: {
        flex: 1,
        backgroundColor: '#1c1d1e',
        position: "relative",
        height: Dimensions.get("window").height * 2
    },

});

const style = StyleSheet.create(styles());
export default style;
