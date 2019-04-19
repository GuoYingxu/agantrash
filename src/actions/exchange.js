import {EXCHANGE_UPDATED} from './type'
export function getExchange(page){

  return (dispatch, getState) =>{
    let {auth,invite} = getState()
    const url = `${host}credit/pointsExchange/queryPointsExchangeListApp?access_token=${auth.accessToken}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currenPage:page || 1,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:EXCHANGE_UPDATED,
        data:{
          page:page,
          total:res.totalRecord,
          list: page == 1 ? res.records : [...record.list,...res.records]
        }})
      }
    })
   
  }
}
