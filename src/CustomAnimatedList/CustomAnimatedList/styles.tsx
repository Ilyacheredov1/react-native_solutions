import { StyleSheet, ViewStyle, } from "react-native";

interface Styles {
    wrapper: ViewStyle
}

const styles = (): Styles => ({
    wrapper: {
        flex: 1,
        backgroundColor: '#111'

    }

});

const style = StyleSheet.create(styles());
export default style;
