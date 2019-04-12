import { createStackNavigator } from 'react-navigation'

import Tab from './tab'
import Qrcode from '../containers/home/qrcode'
import Toudi from '../containers/userHome/toudi'
const AppStack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  Qrcode:{
    screen: Qrcode
  },
  toudi:{
    screen:Toudi
  }
})

export default AppStack