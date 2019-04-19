import {EXCHANGE_UPDATED } from '../actions/type'
const initialState = {
  total:0,
  page:1,
  list:[]
}
const ExchangeReducers = (state=initialState,action)=>{
  switch(action.type){
    case EXCHANGE_UPDATED:
      return Object.assign({},{...state},{...action.data});
    default : 
      return state 
  }
}


export default ExchangeReducers