import { GARBAGE_UPDATED } from './type';
export function getGarbageClass(){
  return (dispatch,state) =>{
    const {garbage} = state
    const url =`${host}collect/garbageType/queryGarbageType?parentId=-1`
    _fetch(url,{
      method:'POST'
    }).then(res => {
      if(res.success == true || res.success == 'true'){
        dispatch({type: GARBAGE_UPDATED,
          data:{
            type:res.list
          }
        })
      }
    })
  }
}