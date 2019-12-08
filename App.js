import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Navigator from './Navigator'
import Circle from './src/circle/index'
import ProgressBar from './src/progressBar/index'
import test from './src/test/test'

const navigator = createSwitchNavigator(
  {
    Navigator: Navigator,
    Circle: Circle,
    ProgressBar: ProgressBar,
    test: test
  },
  {
    initialRouteName: 'Navigator',
    defaultNavigationOptions: {
      title: 'Layout triks'
    }
  }
)
export default createAppContainer(navigator);


