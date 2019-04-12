import {RECORD_UPDATED} from './type'
export function getRecord(){
  return (dispatch, getState) =>{
    let {auth,record} = getState()
    const url = `${host}credit/delivery/queryDeliveryListApp?access_token=${auth.access_token}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currenPage:1,
        pageSize:30
      })
    }).then(res=>{
      console.log(res)
      if(res.success == true  || res.success == 'true'){
        dispatch({type:RECORD_UPDATED,
        data:{
          total:res.totalRecord,
          list: res.records
        }})
      }
    })
   
  }
}
