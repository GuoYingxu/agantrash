import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../routes/AppNavigator'

import demo from './demo'
import auth from './auth'
import record from './record'
import garbage from './garbage'
const reducers = combineReducers({
  nav: createNavigationReducer(AppNavigator),
  demo: demo,
  auth:auth,
  record:record,
  garbage:garbage
})

export default reducers
