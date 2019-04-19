import {
  INVITE_UPDATED
} from '../actions/type'
const initialState = {
  total:0,
  page:1,
  list:[]
}

const inviteReducer = (state = initialState, action) => {
  switch(action.type){
    case INVITE_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default inviteReducer