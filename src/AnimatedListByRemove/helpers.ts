import {Dimensions} from "react-native";
import Animated from "react-native-reanimated";

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get("window").width / TAB_COLUMNS  ;

export const tabs = [0,1, 2, 3, 4, 5, 6];

export interface IOffsets {
    x: Animated.Value<number>
    y: Animated.Value<number>

}
