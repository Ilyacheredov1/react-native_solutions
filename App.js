import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Circle from './src/circle/index'
import ProgressBar from './src/progressBar/index'

const navigator = createSwitchNavigator(
  {
    Circle: Circle,
    ProgressBar: ProgressBar,
  },
  {
    initialRouteName: 'ProgressBar',
    defaultNavigationOptions: {
      title: 'Layout triks'
    }
  }
)
export default createAppContainer(navigator);


