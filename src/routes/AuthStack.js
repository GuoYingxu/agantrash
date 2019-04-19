import { createStackNavigator } from 'react-navigation'

import Login from '../containers/auth/login'
import LoginApp from '../containers/auth/loginApp'
const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  },
  LoginApp:{
    screen: LoginApp
  }
})
export default AuthStack