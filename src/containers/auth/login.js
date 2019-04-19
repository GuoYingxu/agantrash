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
      phone:'',
      sendEnable:false,
      timer:60,
      showCodeInput:false,
      text:''
    }
    this.onChangeVerifyCode = this.onChangeVerifyCode.bind(this)
  }
  static navigationOptions = {
    header: null,
    title: '登录',
  
  }
  onChangeVerifyCode(text){
    this.setState({
      text: text
    })
    //if(text.length == 6){
     // this.props.login(this.state.phone,text)
    //}
  }
  logAct = ()=>{
    this.props.login(this.state.phone,this.state.text)
  }
  componentWillUnmount(){
    if(this.count){
      clearInterval(this.count)
    }
  }
  toHome = ()=>{
    this.props.navigation.navigate('Home')
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
    }else{
      this.setState({
        phone:text,
        sendEnable:false
      }) 
    }
   
  }
  getCode=()=>{
    if(!this.state.sendEnable) return 
    if(this.state.phone.length == 11){
      this.props.sendMsg(this.state.phone)
      this.props.navigation.navigate('LoginApp')
      // this.setState({
      //   sendEnable:false,
      //   // showCodeInput:true
      // })
      // this.count = setInterval(()=>{
      //   let t = this.state.timer;
      //   if(t == 0){
      //     this.setState({
      //       sendMsg : '发送验证码',
      //       sendEnable:true,
      //       timer: 60
      //     })
      //     clearInterval(this.count)
      //   }else{
      //     t--;
      //     this.setState({
      //       sendMsg: t+'秒后重新发送',
      //       timer: t
      //     })
      //   }
      //  },1000)
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
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
        <Text  style={{ fontSize:18,color:Color.f_title}}> 智能垃圾回收平台</Text>
        <TouchableOpacity Style={{flex:'1'}} onPress={()=>{
          this.toHome()
        }}>
          <Iconfont name="guanbi" size={30} color={Color.b_gray} ></Iconfont>
        </TouchableOpacity>
      </View>
      <View style={Ss.headTitle}>
        <Text style={Ss.headTitleText}>登录</Text>
      </View>
      <View style={Ss.phoneContainer}>
        <View style={Ss.phoneIcon}>
          <Iconfont name='shouji' size={20} color={Color.white}></Iconfont>
        </View>
        <View style={Ss.phoneNumberInput}>
          <TextInput placeholder='请输入手机号' onChangeText={(text)=>{this.onChangeText(text)}}   keyboardType={'numeric'}
                    maxLength={11} value={phone}  autoFocus={true} style = {{fontSize:20}}></TextInput>
        </View>
        <TouchableOpacity style={Ss.phoneClear} onPress={()=>{ console.log('clear');this.clearPhone()}}>
          <Iconfont name='guanbi' size={12} color={Color.white}></Iconfont>
        </TouchableOpacity>
      </View>
      {/* {
        showCodeInput && 
        <VerifyCode 
            ref={(ref) => { this.verifyCode = ref; }}
            verifyCodeLength={6}
            onChangeText={text => this.onChangeVerifyCode(text)}
        />
      } */}
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}> 
        <TouchableOpacity activeOpacity = {0.9} onPress={()=>{this.getCode()}} style={[Ss.sendMsgBtn,{borderColor:(sendEnable?"#3db0ff":"#d2d2d2"),backgroundColor:(sendEnable ? "#3db0ff" : 'transparent')}]}>
          <Text style={{color:(sendEnable?Color.white:"#d2d2d2"),fontSize:20,textAlign:'center'}}>发送验证码</Text>
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
  },
  topTitleCloseIcon:{

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
    backgroundColor:"#3db0ff",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  phoneNumberInput:{
    flex:1,
    paddingLeft:20
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