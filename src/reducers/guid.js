import {
  GUID_UPDATED
} from '../actions/type'
const initialState = {
  total:0,
  page:1,
  list:[]
}

const GuidReducer = (state = initialState, action) => {
  switch(action.type){
    case GUID_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default GuidReducer