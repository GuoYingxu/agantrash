import { createStackNavigator } from 'react-navigation'

import Login from '../containers/auth/login'
import Regist from '../containers/auth/regist'
const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Regist:{
    screen:Regist
  }
})

export default AuthStack