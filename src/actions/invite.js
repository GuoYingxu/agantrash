import {INVITE_UPDATED} from './type'
export function getInvite(page){

  return (dispatch, getState) =>{
    let {auth,invite} = getState()
    const url = `${host}user-center/invite/queryInviteListApp?access_token=${auth.accessToken}`
    _fetch(url,{
      method:'POST',
      body:JSON.stringify({
        currenPage:page || 1,
        pageSize:30
      })
    }).then(res=>{
      if(res.success == true  || res.success == 'true'){
        dispatch({type:INVITE_UPDATED,
        data:{
          page:page,
          total:res.totalRecord,
          list: page == 1 ? res.records : [...invite.list,...res.records]
        }})
      }
    })
   
  }
}
