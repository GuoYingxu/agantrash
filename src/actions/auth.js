import { USER_UPDATED } from './type';
import { NavigationActions } from 'react-navigation'
export function checkLoginState(){
  return (dispatch, getState) =>{
    let {auth} = getState()
    storage.load({key:'token'}).then(async token=>{
      console.log(token)
      const data = await getUserInfo(token);
      if(data){
        const userInfo = data.result
        dispatch({type:USER_UPDATED,data:{
          access_token: token,
          // expires_in: res.expires_in,
          // refresh_token: res.refresh_token,
          // scope: res.scope,
          // token_type: res.token_type,
          userInfo:userInfo,
          phone:userInfo && userInfo.phone,
          username:userInfo && userInfo.username,
          is_logined:true
        }})
        storage.save({
          key:'token',
          data:token
        })
        dispatch(NavigationActions.navigate({routeName:'App'}))
      }else{
        dispatch(NavigationActions.navigate({routeName:'Login'}))
      }
    }).catch(err=>{
      console.log(err)
      dispatch({
        type: USER_UPDATED,
        data:{
          is_logined:false
        }
      })
      dispatch(NavigationActions.navigate({routeName: 'Login'}))
    })
  }
}
export function sendMsg(phone,type){

  return (dispatch,getState) => {
    const {auth} = getState()
    let url = `${host}notification/notification-anon/codes?phone=${phone}&type=${type}`
    _fetch(url,
      {
        method:'POST',
      }).then(res=>{
        if(res.result){
          let actiondata = {}
          if(type=='login'){
            actiondata.loginKey = res.result.key
          }else{
            actiondata.registKey = res.result.key
          }
         dispatch({type:USER_UPDATED,data:{...actiondata}})
        }
      }).catch(er=>{
        console.log(er)
      })
  }
}
export function regist(phone,code){
  return (dispatch,getState) => {
    const {auth} = getState()
    let url = `${host}user-center/customer/phone-rigister?phone=${phone}&code=${code}&key=${auth.registKey}`
    _fetch(url,
      {
        method:'POST'
      }).then(res=>{
        if(res.success){
          dispatch(NavigationActions.navigate({routeName: 'Login'})) 
        }
      }).catch(res=> console.log(res))
  }
}
function getUserInfo(token){
  const url = `${host}user-center/customer/current?access_token=${token}`
  return _fetch(url,{
    method:'GET'
  }).then(res=>{
    console.log(res)
    return res
  }).catch(err=>{
    return {
      result:null
    }
  })
}
  
    
 
export function login(phone,code){
  return (dispatch,getState) => {
    const {auth} = getState()
    let url = `${host}sys/login-sms?phone=${phone}&code=${code}&key=${auth.loginKey}`
    _fetch(url,
      {
        method:'POST'
      }).then(async res=>{
        if(res.access_token){
          const data = await getUserInfo(res.access_token);
          const userInfo = data.result
          dispatch({type:USER_UPDATED,data:{
            access_token: res.access_token,
            expires_in: res.expires_in,
            refresh_token: res.refresh_token,
            scope: res.scope,
            token_type: res.token_type,
            userInfo:userInfo,
            phone:userInfo && userInfo.phone,
            username:userInfo && userInfo.username
          }})

          storage.save({
            key:'token',
            data:res.access_token
          })
          dispatch(NavigationActions.navigate({routeName:'App'}))
        }
      })
  }
}
