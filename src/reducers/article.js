import {ARTICLE_UPDATED } from '../actions/type'
const initialState = {
  id:'',
  title:'',
  content:'',
  typeName:''
}
const ArticleReducers = (state=initialState,action)=>{
  switch(action.type){
    case ARTICLE_UPDATED:
      return Object.assign({},{...state},{...action.data});
    default : 
      return state 
  }
}


export default ArticleReducers