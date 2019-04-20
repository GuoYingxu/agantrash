import { USER_UPDATED,RECORD_UPDATED,INVITE_UPDATED,EXCHANGE_UPDATED } from './type';
import { NavigationActions } from 'react-navigation'

export function  changename(name) {
  return (dispatch,getState) =>{
    const {auth} = getState()
    let url = `${host}user-center/customer/updateMe?access_token=${auth.accessToken}`
    _fetch(url,
      {
        method:'POST',
        body:JSON.stringify({
          nickname:name 
        })
      }).then(res=>{
        console.log('=========================',res)
         if(res.success){
           dispatch({type:USER_UPDATED,data:{nickname:name}})
           dispatch(NavigationActions.navigate({routeName:'UserHome'}))
           
        //   let actiondata = {}
        //   actiondata.loginKey = res.result.key
        //  dispatch({type:USER_UPDATED,data:{...actiondata}})
         }
      }).catch(er=>{
        console.log(er)
      })
  }
}
export function clearSession(){
  return (dispatch,getState) =>{

    storage.remove({
      key:'tokenAccess',
    })
    dispatch({type:USER_UPDATED,data:{accessToken:'',name:'',isLogined:false,userInfo:null,phone:'',nickname:''}})
    dispatch({type:RECORD_UPDATED,data:{total:0,list:[],page:1,loaded:false}})
    dispatch({type:INVITE_UPDATED,data:{total:0,list:[],page:1}})
    dispatch({type:EXCHANGE_UPDATED,data:{total:0,list:[],page:1}})
  }

}
export function checkLoginState(){
  return (dispatch, getState) =>{
    let {auth} = getState()
    // console.log({key:'token'})
    storage.load({key:'tokenAccess'}).then(async token=>{
      if(token && token.accessToken){
        let data = await getUserInfo(token.accessToken);
        console.log('data---',data)
        if(data.error){ //刷新token
          console.log('=====refres')
          token =await refreshToken(token)
          if(token !=null && token.accessToken){
            data = await getUserInfo(token.accessToken)
            if(!data.success){ //用户不存在
              console.log('---tkremove')
              storage.remove({
                key: 'tokenAccess'
              });
              return 
            }
          } else{
            return
          }
        }
      
        if(data.result){
          const userInfo = data.result
          dispatch({type:USER_UPDATED,data:{
            accessToken: token.accessToken,
            expiresIn: token.expiresIn,
            refreshToken: token.refreshToken,
            scope: token.scope,
            tokenType: token.tokenType,
            userInfo:userInfo,
            phone:userInfo && userInfo.phone,
            nickname:userInfo && userInfo.nickname || '您的昵称',
            isLogined:true
          }})
          storage.save({
            key:'tokenAccess',
            data:{
              accessToken: token.accessToken,
              expiresIn: token.expiresIn,
              refreshToken: token.refreshToken,
              scope: token.scope,
              tokenType: token.tokenType,
            }
          })
        }else{
          dispatch(NavigationActions.navigate({routeName:'Login'}))
        }
      }else{
        console.log('---tkremove')
        storage.remove({
          key:'tokenAccess',
        })
      }
    }).catch(err=>{
      console.log('---',err)
      dispatch({
        type: USER_UPDATED,
        data:{
          isLogined:false
        }
      })
     
    })
  }
}
export function sendMsg(phone){
  return (dispatch,getState) => {
    dispatch({type:USER_UPDATED,data:{phone:phone}})
    let url = `${host}notification/notification-anon/codes?phone=${phone}&type=login`
    _fetch(url,
      {
        method:'POST',
      }).then(res=>{
        if(res.result){
          let actiondata = {}
          actiondata.loginKey = res.result.key
         dispatch({type:USER_UPDATED,data:{...actiondata}})
        }
      }).catch(er=>{
        console.log(er)
      })
  }
}

function getUserInfo(token){
  console.log('getUserInfo')
  const url = `${host}user-center/customer/current?access_token=${token}`
  return _fetch(url,{
    method:'GET'
  }).then(async res=>{  
    
    console.log('geutuser',res)
    return res
  }).catch(err=>{ 
    return {
      result:null
    }
  })
}
function refreshToken(token){
  const url = `${host}sys/refresh_token?refresh_token=${token.refreshToken}`
  console.log('refresh token')
  return _fetch(url,{
    method:"post"
  }).then(res=>{
    if(res.access_token){
      return {
        accessToken: res.access_token,
        expiresIn: res.expires_in,
        refreshToken: res.refresh_token,
        scope: res.scope,
        tokenType: res.token_type,
      }
    }else{
      return null
    }
  }).catch(err=>{
    return null
  })
}

 
export function login(phone,code){
  console.log('=====ohon   code')
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
            accessToken: res.access_token,
            expiresIn: res.expires_in,
            refreshToken: res.refresh_token,
            scope: res.scope,
            tokenType: res.token_type,
            userInfo:userInfo,
            phone:userInfo && userInfo.phone,
            nickname:userInfo && userInfo.nickname || '您的昵称',
            isLogined:true
          }})

          storage.save({
            key:'tokenAccess',
            data:{
              accessToken: res.access_token,
              expiresIn: res.expires_in,
              refreshToken: res.refresh_token,
              scope: res.scope,
              tokenType: res.token_type,
            }
          })
          dispatch(NavigationActions.navigate({routeName:'App'}))
        }
      })
  }
}
