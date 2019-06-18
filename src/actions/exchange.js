import {EXCHANGE_UPDATED} from './type'
export function getExchange(page){

  return (dispatch, getState) =>{
    let {auth,invite} = getState()
    let p= page|| 1
    const url = `${host}credit/pointsExchange/queryPointsExchangeListApp?access_token=${auth.accessToken}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currentPage:p,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:EXCHANGE_UPDATED,
        data:{
          page:p,
          total:res.totalRecord,
          list: p.toString() == '1' ? res.records : [...record.list,...res.records]
        }})
      }
    })
   
  }
}
