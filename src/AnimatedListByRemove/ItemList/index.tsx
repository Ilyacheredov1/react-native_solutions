import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import Animated, {Easing, neq, not} from 'react-native-reanimated';
import {PanGestureHandler, State} from "react-native-gesture-handler";
import {moving, panGestureHandler, withSpringTransition} from "react-native-redash";
import {IOffsets, TAB_SIZE} from "../helpers";

const {
    Value,
    add,
    cond,
    eq,
    block,
    set,
    useCode,
    multiply,
    divide,
    and,
    round
} = Animated;

export const withOffset = (
    {
        offset,
        value,
        state: gestureState
    }: {
        offset: Animated.Adaptable<number>;
        value: Animated.Value<number>;
        state: Animated.Value<State>;
    }) => {
    const safeOffset = new Value(0);
    return cond(
        eq(gestureState, State.ACTIVE),
        add(safeOffset, value),
        set(safeOffset, offset)
    );
};

interface Props {
    item: number,
    offsets: IOffsets[]
    handleDeleteTab: (index: number) => void
}

const ItemList: React.FC<Props> = (
    {
        item,
        offsets,
        handleDeleteTab,
    }) => {

    const {
        gestureHandler,
        state,
        translationX,
        velocityX,
        translationY,
        velocityY
    } = panGestureHandler();

    const currentOffset = offsets[item];

    const x = withOffset({
        value: translationX,
        offset: currentOffset.x,
        state
    });
    const y = withOffset({
        value: translationY,
        offset: currentOffset.y,
        state
    });

    const zIndex = cond(eq(state, State.ACTIVE), 200, cond(moving(y), 100, 1));

    const offsetX = multiply(round(divide(x, TAB_SIZE)), TAB_SIZE);
    const offsetY = multiply(round(divide(y, TAB_SIZE)), TAB_SIZE);

    const translateX = withSpringTransition(x, {}, velocityX, state);
    const translateY = withSpringTransition(y, {}, velocityY, state);

    useCode(
        () =>
            block(
                offsets.map(offset =>
                    cond(
                        and(
                            eq(offsetX, offset.x),
                            eq(offsetY, offset.y),
                            eq(state, State.ACTIVE)
                        ),
                        [
                            set(offset.x, currentOffset.x),
                            set(offset.y, currentOffset.y),
                            set(currentOffset.x, offsetX),
                            set(currentOffset.y, offsetY)
                        ]
                    )
                )
            ),
        [currentOffset.x, currentOffset.y, offsetX, offsetY, offsets, state]
    );

    return (
        <Animated.View
            style={[
                styles.wrapper,
                {transform: [{translateX}, {translateY}], zIndex}
            ]}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {item}
                </Text>
                {/*<TouchableOpacity onPress={() => handleDeleteTab(item)}>*/}
                {/*    <Text>*/}
                {/*        Remove Item*/}
                {/*    </Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity >
                    <Text>
                        send Item to down
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
};

export default React.memo(ItemList);
