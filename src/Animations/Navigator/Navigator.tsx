import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './ScreenNavigator';

import SimpleAnimation from '../SimpleAnimation';
import TranslatePosition from '../TranslatePosition'
import Scale from '../Scale'
import AbsolutePosition from '../AbsolutePosition'
import ColorBackground from '../ColorBackground'
import Rotation from '../Rotation'
import Easing from '../Easing'
import Spring from '../Spring'
import Event from '../Event'
import Decay from '../Decay/Decay_short_code'
import Add from '../Add';
import Divide_Multiply from '../Divide_Multiply'
import Parralel_Sequence from '../Parralel_Sequence'

export const ArrayScreens: string[] = [
    'SimpleAnimation',
    'TranslatePosition',
    'Scale',
    'AbsolutePosition',
    'ColorBackground',
    'Rotation',
    'Easing',
    'Spring',
    'Event',
    'Decay',
    'Add',
    'Divide_Multiply',
    'Parralel_Sequence',
];

const AppNavigator = createStackNavigator(
    {
        Navigator,

        SimpleAnimation,
        TranslatePosition,
        Scale,
        AbsolutePosition,
        ColorBackground,
        Rotation,
        Easing,
        Spring,
        Event,
        Decay,
        Add,
        Divide_Multiply,
        Parralel_Sequence,
    },
    {
        initialRouteName: 'Navigator',
        headerMode: 'none'
    }
);


export default createAppContainer(AppNavigator);
