// import { Navigation } from 'react-native-navigation';

// import MenuScreen from '../menu';
import CalendarsScreen from '../calendars';
import AgendaScreen from '../agenda';
import CalendarsList from '../calendarsList';
import HorizontalCalendarList from '../horizontalCalendarList';
// import ExpandableCalendar from '../expandableCalendar';


// export function registerScreens() {
//   Navigation.registerComponent('Menu', () => MenuScreen);
//   Navigation.registerComponent('Calendars', () => CalendarsScreen);
//   Navigation.registerComponent('Agenda', () => AgendaScreen);
//   Navigation.registerComponent('CalendarsList', () => CalendarsList);
//   Navigation.registerComponent('HorizontalCalendarList', () => HorizontalCalendarList);
//   Navigation.registerComponent('ExpandableCalendar', () => ExpandableCalendar);
// }

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './ScreenNavigator';


export const ArrayScreens: string[] = [
    // 'MenuScreen',
    'CalendarsScreen',
    'AgendaScreen',
    'CalendarsList',
    'HorizontalCalendarList',
    // 'ExpandableCalendar',
];

const AppNavigator = createStackNavigator(
    {
        Navigator,

        // MenuScreen,
        CalendarsScreen,
        AgendaScreen,
        CalendarsList,
        HorizontalCalendarList,
        // ExpandableCalendar,

    },
    {
        initialRouteName: 'Navigator',
        headerMode: 'none'
    }
);


export default createAppContainer(AppNavigator);
