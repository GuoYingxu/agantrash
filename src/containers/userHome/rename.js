import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as GuidActionCreator from '../../actions/guid'
import * as AuthActionCreator from '../../actions/auth'
class RenamePage extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '用户资料修改' 
  }
  toInfo = (id)=>{
    this.props.navigation.navigate({routeName:'Qrcode'})
  }
  rename = ()=>{
    this.props.navigation.navigate({routeName:'Nicheng'})
  }
  toQuit =(id)=>{
   
    this.props.navigation.navigate('Home')
    this.props.clearSession()
  }
  render(){ 
    const {auth} = this.props
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '用户资料修改'></Header>
      <TouchableOpacity   activeOpacity = {0.9} style={ScopedStyle.listItem} onPress = {()=>{
        
      }} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>头像</Text>
        </View>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.rename()} activeOpacity = {0.9} style={ScopedStyle.listItem} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>昵称</Text>
            <Text style={[ScopedStyle.garbageClass,{marginLeft:10}]}>{auth.nickname}</Text>
        </View>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.toInfo()} activeOpacity = {0.9} style={ScopedStyle.listItem} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>二维码</Text>
        </View>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity   activeOpacity = {0.9} style={ScopedStyle.listItem} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>手机</Text>
            <Text style={[ScopedStyle.garbageClass,{marginLeft:10}]}> {auth.phone}</Text>
        </View>
        {/* <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View> */}
      </TouchableOpacity>

      <TouchableOpacity   activeOpacity = {0.9} style={ScopedStyle.listItem} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>注册时间： {auth.userInfo.registerTime}</Text>
        </View>
        {/* <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View> */}
      </TouchableOpacity>
      
      {/* <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}> 
        <TouchableOpacity activeOpacity = {0.9} onPress={()=>{this.toQuit()}} style={[ScopedStyle.sendMsgBtn,{borderColor: "#3db0ff" ,backgroundColor:  "#3db0ff"  }]}>
          <Text style={{color: Color.white,fontSize:20,textAlign:'center'}}> 退出登录</Text>
        </TouchableOpacity>
      </View> */}
      
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    help:state.help,
    auth:state.auth
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...GuidActionCreator,...AuthActionCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RenamePage)
const ScopedStyle = StyleSheet.create({
  sendMsgBtn:{ 
    width:'80%',
    height:40,
    color:"#3db0ff",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // paddingLeft: 10,
    // paddingTop:4,
    // paddingBottom:4,
    // paddingRight:10,
    borderRadius:20,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#3db0ff",
    margin:'auto',
    textAlign:'center'
  },
  listItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    paddingLeft:30,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderColor:'#dcdcdc',
  },
  garbageClass:{
    fontSize:16,
    color:Color.f_body
  },
  time:{
    fontSize:12,
    color:"#dcdcdc"
  },
  leftCon:{
    display:'flex',
    flex:1,
    flexDirection:'row'
  },
  rightCon:{

  },
  score:{
    fontSize:20,
    color:'#3db0ff',
  },
  head:{
    height:50  ,
    backgroundColor:'#3db0ff' ,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10
  },
  headerIcon:{
    width:80
  },
  headTitle:{
    paddingLeft:15,
    flex:1
  },
  
})