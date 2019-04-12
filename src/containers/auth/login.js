import React, { Component } from 'react'
import { View, Text ,StatusBar,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import VerifyCode from '../../components/verifyCodeInput/index';
import Wrapper from '../../components/wrapper';
import Iconfont from '../../components/iconfont'
import Color from '../../style/Color';
import * as AuthActionCreators from '../../actions/auth'
import { bindActionCreators } from 'redux';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      verifyCode:'',
      sendMsg:'发送验证码',
      phone:'18561387687',
      sendEnable:false,
      timer:60,
      showCodeInput:false
    }
    this.onChangeVerifyCode = this.onChangeVerifyCode.bind(this)
  }
  onChangeVerifyCode(text){
    if(text.length == 6){
      this.props.login(this.state.phone,text)
    }
  }
  componentWillUnmount(){
    if(this.count){
      clearInterval(this.count)
    }
  }
  clearPhone=()=>{
    console.log('clear')
    this.setState({
      phone:'',
      sendEnable:false,
      showCodeInput:false
    })
  }
  onChangeText=(text)=>{
    if(text.length == 11){
     this.setState({
       phone:text,
       sendEnable:true
     })
    }
    this.setState({
      phone:text
    }) 
  }
  getCode=()=>{
    if(!this.state.sendEnable) return 
    if(this.state.phone.length == 11){
      this.props.sendMsg(this.state.phone,'login')
      this.setState({
        sendEnable:false,
        showCodeInput:true
      })
      this.count = setInterval(()=>{
        let t = this.state.timer;
        if(t == 0){
          this.setState({
            sendMsg : '发送验证码',
            sendEnable:true,
            timer: 60
          })
          clearInterval(this.count)
        }else{
          t--;
          this.setState({
            sendMsg: t+'秒后重新发送',
            timer: t
          })
        }
      },1000)
    }else{
      return 
    }
  }
  render(){
    const {sendMsg,phone,sendEnable,showCodeInput} = this.state
    return (
      <Wrapper>
      <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={Ss.headTitle}>
        <Text style={Ss.headTitleText}>登录</Text>
      </View>
      <View style={Ss.phoneContainer}>
        <View style={Ss.phoneIcon}>
          <Iconfont name='shouji' size={15} color={Color.white}></Iconfont>
        </View>
        <View style={Ss.phoneNumberInput}>
          <TextInput placeholder='请输入手机号' onChangeText={(text)=>{this.onChangeText(text)}}   keyboardType={'numeric'}
                    maxLength={13} value={phone}  autoFocus={true} style = {{fontSize:20}}></TextInput>
        </View>
        <TouchableOpacity style={Ss.phoneClear} onPress={()=>{ console.log('clear');this.clearPhone()}}>
          <Iconfont name='guanbi' size={12} color={Color.white}></Iconfont>
        </TouchableOpacity>
      </View>
      {
        showCodeInput && 
        <VerifyCode 
            ref={(ref) => { this.verifyCode = ref; }}
            verifyCodeLength={6}
            onChangeText={text => this.onChangeVerifyCode(text)}
        />
      }
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}> 
        <TouchableOpacity onPress={()=>{this.getCode()}} style={[Ss.sendMsgBtn,{borderColor:(sendEnable?"#128bd6":"#d2d2d2")}]}>
          <Text style={{color:(sendEnable?"#128bd6":"#d2d2d2")}}>{sendMsg}</Text>
        </TouchableOpacity>
      </View>
      </Wrapper> 
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...AuthActionCreators},dispatch)
}
export default connect(null,mapDispatchToProps)(Login)

const Ss  = StyleSheet.create({
  headTitle:{
    padding:40
  },
  headTitleText:{
    fontSize:30,
    fontWeight:'600',
  },
  phoneContainer:{
    padding:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  phoneIcon:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:"#128bd6",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  phoneNumberInput:{
    flex:1,
  },
  phoneClear:{
    backgroundColor:"#d2d2d2",
    width:20,
    height:20,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  sendMsgBtn:{ 
    color:"#128bd6",
    paddingLeft: 10,
    paddingTop:4,
    paddingBottom:4,
    paddingRight:10,
    borderRadius:5,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#128bd6",
    margin:'auto',
    textAlign:'center'
  }

})