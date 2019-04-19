import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../routes/AppNavigator'

import demo from './demo'
import auth from './auth'
import record from './record'
import garbage from './garbage'
import exchange from './exchange'
import invite from './invite'
import guid from './guid'
import help from './help'
import article from './article'
const reducers = combineReducers({
  nav: createNavigationReducer(AppNavigator),
  demo: demo,
  auth:auth,
  record:record,
  garbage:garbage,
  exchange: exchange,
  invite:invite,
  guid:guid,
  help:help,
  article:article
})

export default reducers
