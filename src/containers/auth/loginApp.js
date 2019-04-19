import React, { Component } from 'react'
import { View, Text ,StatusBar,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import VerifyCode from '../../components/verifyCodeInput/index';
import Wrapper from '../../components/wrapper';
import Iconfont from '../../components/iconfont'
import Color from '../../style/Color';
import * as AuthActionCreators from '../../actions/auth'
import { bindActionCreators } from 'redux';
class LoginApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      verifyCode:'',
      sendMsg:'60秒',
      sendEnable:false,
      codesendEnable:false,
      timer:60,
      text:''
    }
    this.onChangeVerifyCode = this.onChangeVerifyCode.bind(this)
  }
  // static navigationOptions = {
  //   title: '',
  // }
  onChangeVerifyCode(text){
   if(text.length == 4){
     this.setState({
       text:text,
       sendEnable: true
     })
   }else{
     this.setState({
       text:text,
       sendEnable:false
     })
   }
    //if(text.length == 6){
     // this.props.login(this.state.phone,text)
    //}
  }
  componentDidMount(){
    this.count = setInterval(()=>{
      let t = this.state.timer;
      if(t == 0){
        this.setState({
          sendMsg : '发送验证码',
          codesendEnable:true,
          timer: 60
        })
        clearInterval(this.count)
      }else{
        t--;
        this.setState({
          sendMsg: t+'秒',
          timer: t,
          codesendEnable:false
        })
      }
    },1000)
  }
  logAct = ()=>{
    if(this.state.text.length == 4){
      this.props.login(this.props.auth.phone,this.state.text)
    }
  }
  componentWillUnmount(){
    if(this.count){
      clearInterval(this.count)
    }
  }
  reSendMsg = ()=>{
    this.props.sendMsg(this.props.auth.phone)
  }
 
  render(){
    const {sendMsg,sendEnable,codesendEnable} = this.state
    return (
      <Wrapper>
      <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
        <Text  style={{ fontSize:18,color:Color.f_title}}>验证码已发送至</Text>
      </View>
      <View style={Ss.phoneContainer}>
        <View style={Ss.phoneNumberInput}>
          <Text style={{fontSize:24,color:Color.black}}>{this.props.auth.phone}</Text>
        </View>
        <TouchableOpacity style={[Ss.phoneClear,{backgroundColor: '#3db0ff'}]} onPress={()=>{this.reSendMsg()}}>
          <Text style={{color:Color.white}}>{sendMsg}</Text>
        </TouchableOpacity>
      </View>
      <VerifyCode 
          ref={(ref) => { this.verifyCode = ref; }}
          verifyCodeLength={4}
          onChangeText={text => this.onChangeVerifyCode(text)}
      />
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:50}}> 
        <TouchableOpacity activeOpacity = {0.9} onPress={()=>{this.logAct()}} style={[Ss.sendMsgBtn,{borderColor:(sendEnable?"#3db0ff":"#d2d2d2"),backgroundColor:(sendEnable ? "#3db0ff" : 'transparent')}]}>
          <Text style={{color:(sendEnable?Color.white:"#d2d2d2"),fontSize:20,textAlign:'center'}}>登录</Text>
        </TouchableOpacity>
      </View>
       
     
      </Wrapper> 
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...AuthActionCreators},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginApp)

const Ss  = StyleSheet.create({
  
  headTitle:{
    padding:40
  },
  headTitleText:{
    fontSize:40, 
  },
  topTitleCloseIcon:{

  },
  phoneContainer:{
    padding:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    marginBottom:20
  },
  phoneIcon:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:"#3db0ff",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  phoneNumberInput:{
    flex:1,
  },
  phoneClear:{
    backgroundColor:"#d2d2d2",
    width:100,
    height:30,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
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
  }

})