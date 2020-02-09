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


export const ArrayScreens: string[] = [
    'SimpleAnimation',
    'TranslatePosition',
    'Scale',
    'AbsolutePosition',
    'ColorBackground',
    'Rotation',
    'Easing',
    'Spring',
]


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
    },
    {
        initialRouteName: 'Navigator',
        headerMode: 'none'
    }
);


export default createAppContainer(AppNavigator);
