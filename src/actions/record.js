import {RECORD_UPDATED} from './type' 
export function getRecord(page){ 
  return (dispatch, getState) =>{
    let {auth,record} = getState()
    const url = `${host}credit/delivery/queryDeliveryListApp?access_token=${auth.accessToken}`
    let p = page || 1 
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currentPage:p,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:RECORD_UPDATED,
        data:{
          page:p,
          total:res.totalRecord,
          list: p.toString() == '1' ? res.records : [...record.list,...res.records],
          loaded:true
        }})
      }
    })
   
  }
}
