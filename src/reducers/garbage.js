import {
  GARBAGE_UPDATED
} from '../actions/type'
import _ from  'lodash'
const initialState = {
  type:[]
}

const garbageReducer = (state = initialState, action) => {
  switch(action.type){
    case GARBAGE_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default garbageReducer