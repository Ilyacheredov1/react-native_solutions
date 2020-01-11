import React from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated from "react-native-reanimated";
import { bInterpolate, bInterpolateColor } from "react-native-redash";

const size = 30

interface ChevronProps {
  transition: Animated.Node<number>;
}

const Chevron: React.FC<ChevronProps> = ({ transition }) => {

  const rotateZ = bInterpolate(transition, Math.PI, 0);
  const backgroundColor = bInterpolateColor(
    transition,
    //@ts-ignore
    { r: 82, g: 82, b: 81 },
    { r: 228, g: 86, b: 69 }
  ) as Animated.Node<number>;

  return (
    <Animated.View
      style={[styles.container, { transform: [{ rotateZ }], backgroundColor }]}
    >
      <Icon name="arrow-alt-circle-up" color="black" size={24} />
    </Animated.View>
  );
};


;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center"
  }
});


export default Chevron;
