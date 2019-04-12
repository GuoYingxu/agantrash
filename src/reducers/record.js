import {
  RECORD_UPDATED
} from '../actions/type'
import _ from  'lodash'
const initialState = {
  total:0,
  list:[]
}

const recordReducer = (state = initialState, action) => {
  switch(action.type){
    case RECORD_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default recordReducer