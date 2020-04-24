import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import Tab from "../Tab";
import {IOffsets, TAB_SIZE} from "../helpres";
import Animated, {Easing, neq, not} from 'react-native-reanimated';
import {PanGestureHandler, State} from "react-native-gesture-handler";
import {panGestureHandler} from "react-native-redash";

const {
    Value,
    add,
    cond,
    eq,
    block,
    set,
    useCode,
    floor,
    multiply,
    divide,
    max,
    and,
    Clock,
    timing,
    clockRunning,
    stopClock,
    startClock,
} = Animated;

interface IWithSnap {
    value: Animated.Value<number>
    offset: Animated.Value<number>
    state: Animated.Value<State>
}

const withSnap = ({value, offset, state: gestureState}: IWithSnap) => {
    const clock = new Clock();
    const state = {
        position: new Value(0),
        finished: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    }
    const config = {
        toValue: new Value(0),
        duration: 250,
        easing: Easing.linear
    }
    const position = new Value(0)
    const safeOffset = new Value(0);
    return block([
        cond(eq(gestureState, State.ACTIVE), set(position, value)),
        cond(and(neq(gestureState, State.ACTIVE), not(clockRunning(clock))), [
            set(config.toValue, offset),
            set(state.position, add(safeOffset, position)),
        ]),
        cond(eq(gestureState, State.ACTIVE), add(safeOffset, value), [
            set(safeOffset, offset),
            safeOffset
        ])
    ]);
}

interface Props {
    item: number,
    offsets: IOffsets[]
}

const SortableTab: React.FC<Props> = ({item, offsets}) => {

    const {gestureHandler, state, translationX, translationY} = panGestureHandler();
    const zIndex = cond(eq(state, State.ACTIVE), 10, 1)
    const currentOffset = offsets[item];

    const translateX = withSnap({
        value: translationX,
        offset: currentOffset.x,
        state
    });
    const translateY = withSnap({
        value: translationY,
        offset: currentOffset.y,
        state
    });

    const offsetX = multiply(max(floor(divide(translationX, TAB_SIZE)), 0), TAB_SIZE);
    const offsetY = multiply(max(floor(divide(translationY, TAB_SIZE)), 0), TAB_SIZE);

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
        <PanGestureHandler {...gestureHandler}>
            <Animated.View
                style={[
                    styles.wrapper,
                    {transform: [{translateX}, {translateY}]}
                ]}
            >
                <Tab item={item}/>
            </Animated.View>
        </PanGestureHandler>
    )
};

export default React.memo(SortableTab);
