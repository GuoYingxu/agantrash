import {
  SIGN_IN,
  SIGN_UP,
  USER_UPDATED
} from '../actions/type'

const initialState = {
  id: null,
  username: null,
  phone:'',
  is_logined: false,
  registKey:'',
  registCode:'',
  loginKey:'',
  loginCode:''
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SIGN_IN:
      return { ...state }
    case USER_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default authReducer