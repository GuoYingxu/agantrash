import {INVITE_UPDATED} from './type'
export function getInvite(page){

  return (dispatch, getState) =>{
    let {auth,invite} = getState()
    let p = page || 1
    const url = `${host}user-center/invite/queryInviteListApp?access_token=${auth.accessToken}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currentPage:p,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:INVITE_UPDATED,
        data:{
          page: p,
          total:res.totalRecord,
          list: p.toString() == '1' ? res.records : [...invite.list,...res.records]
        }})
      }
    })
   
  }
}
