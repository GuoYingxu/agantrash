import {RECORD_UPDATED} from './type'
export function getRecord(page){

  return (dispatch, getState) =>{
    let {auth,record} = getState()
    const url = `${host}credit/delivery/queryDeliveryListApp?access_token=${auth.accessToken}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currenPage:page || 1,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:RECORD_UPDATED,
        data:{
          page:page,
          total:res.totalRecord,
          list: page == 1 ? res.records : [...record.list,...res.records],
          loaded:true
        }})
      }
    })
   
  }
}
