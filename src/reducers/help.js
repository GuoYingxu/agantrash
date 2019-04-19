import {
  HELP_UPDATED
} from '../actions/type'
const initialState = {
  total:0,
  page:1,
  list:[]
}

const HelpReducer = (state = initialState, action) => {
  switch(action.type){
    case HELP_UPDATED:
      let  s = Object.assign({},{...state},{...action.data})
      return s 
    default:
      return state
  }
}

export default HelpReducer