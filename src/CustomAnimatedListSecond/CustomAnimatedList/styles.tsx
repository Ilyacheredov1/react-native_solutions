import { StyleSheet, ViewStyle, } from "react-native";

interface Styles {
    wrapper: ViewStyle
    listWrapper: ViewStyle
}

const styles = (): Styles => ({
    wrapper: {
        flex: 1,
        backgroundColor: '#111',
        paddingTop: 40,
        position: "relative",
    },
    listWrapper: {
        flexDirection: "row",
    }

});

const style = StyleSheet.create(styles());
export default style;
