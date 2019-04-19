import { createStackNavigator } from 'react-navigation'

import Tab from './tab'
import Qrcode from '../containers/home/qrcode'
import Toudi from '../containers/userHome/toudi'
import Garbage from '../containers/home/garbage';
import Exchange from '../containers/userHome/exchange';
import Help from '../containers/userHome/helpInfo'
import Invite from '../containers/userHome/invite'
import Yq from '../containers/home/yq'
import GuidPage from '../containers/home/guid'
import ArtPage from '../containers/userHome/article'
import SettingPage from '../containers/userHome/setting'
const AppStack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  Qrcode:{
    screen: Qrcode,
  },
  toudi:{
    screen:Toudi
  },
  Garbage:{
    screen : Garbage
  },
  Exchange :{
    screen: Exchange
  },
  HelpPage:{
    screen: Help
  },
  Invite:{
    screen:Invite
  },
  Yq:{
    screen:Yq
  },
  GuidPage:{
    screen:GuidPage
  },
  Article:{
    screen:ArtPage
  },
  SettingPage:{
    screen:SettingPage
  }
})

export default AppStack
