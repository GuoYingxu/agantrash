import React from 'react'
import {Text,Image,StyleSheet,View,TouchableOpacity} from 'react-native'
import Iconfont from '../../components/iconfont'
import Wrapper from '../../components/wrapper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Style  from '../../style/Style'
import reducer from '../../reducers/demo';
import Color from '../../style/Color';
import { connect } from 'react-redux'
import * as AuthActionCreators from '../../actions/auth'
import * as RecordActionCreators from '../../actions/record'
import * as GarbageActionCreators from '../../actions/garbage'
import { bindActionCreators } from 'redux';
class Home extends React.Component{

  static navigationOptions = {
    header: null,
    title: '首页',
    tabBarIcon: ({focused, tintColor}) => {
      // const iconName = focused ? '' : 'faxian'
      return <Iconfont name='shouye' size={24} color={tintColor} />
    }
  }
  showQrcode= ()=>{
    this.props.navigation.navigate('Qrcode')
  }
  componentWillMount(){
    this.props.getGarbageClass()
    this.props.getRecord()
  }
  render(){
    const {auth,record} = this.props
    return (
      <Wrapper style ={ScopedStyle.container}>
        <View style={ScopedStyle.head}>
          <Image style={ScopedStyle.headImage}  source={require('../../../assets/images/head.png')} resizeMode="cover"  />
        </View>
        <View style={ScopedStyle.funcContainer}>
          <View style={ScopedStyle.func}>
            <View style={[ScopedStyle.funcIcon,ScopedStyle.ColorOrange]}>
              <Iconfont name='fenlei' size={30} color={Color.white}></Iconfont>
            </View>
            <View  style={ScopedStyle.iconTitle}><Text>回收分类</Text></View>
          </View>
          <View style={ScopedStyle.func}>
            <View style={[ScopedStyle.funcIcon,ScopedStyle.ColorBlue2]}>
              <Iconfont name='liwuhuodong' size={30} color={Color.white}></Iconfont>
            </View>
            <View  style={ScopedStyle.iconTitle}><Text>邀请有礼</Text></View>
          </View>
          <View style={ScopedStyle.func}>
            <View style={[ScopedStyle.funcIcon,ScopedStyle.ColorGreen]}>
              <Iconfont name='iconset0119' size={30} color={Color.white}></Iconfont>
            </View>
            <View style={ScopedStyle.iconTitle}><Text class={ScopedStyle.iconText}>入门指南</Text></View>
          </View>
        </View>
        <View style={ScopedStyle.bbTitle}>
          <View style={ScopedStyle.line}></View>
          <View style = {ScopedStyle.bigTitle}><Text style={{fontSize:20,textAlign:'center'}}>我的投递</Text></View>
          <View style={ScopedStyle.line}></View>
        </View>
        <View style={ScopedStyle.scoreContainer}>
          <View style={ScopedStyle.score}>
            <View style={ScopedStyle.scoreValue}><Text style={ScopedStyle.scoreValueText}>{auth && auth.userInfo && auth.userInfo.points || 0}</Text></View>
            <View style={ScopedStyle.scoreTitle}><Text style={ScopedStyle.scoreTitleText}>当前积分</Text></View>
          </View>
          <View style={ScopedStyle.score}>
            <View style={ScopedStyle.scoreValue}><Text style={ScopedStyle.scoreValueText}>{record.total}</Text></View>
            <View style={ScopedStyle.scoreTitle}><Text style={ScopedStyle.scoreTitleText}>投递次数</Text></View>
          </View>
        </View>
        <TouchableOpacity style={ScopedStyle.qrcodeContainer} onPress={()=>this.showQrcode()}>
          <View style={ScopedStyle.qrcode}>
            <Iconfont name='erweima' color="#91d64b" size={80}></Iconfont>
          </View>
          <View style={ScopedStyle.qrinfoCon}>
            <Text style={{fontSize:20,fontWeight:'bold',lineHeight:24}}>我的二维码</Text>
            <Text>1.打开二维码</Text>
            <Text>2.放入智能垃圾箱扫描设备</Text>
            <Text>3.开箱投递垃圾</Text>
          </View>
          <View style={ScopedStyle.rightRow}>
            <Iconfont name='you-jiantou' color="#91d64b" size = {80}></Iconfont>
          </View>
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth:state.auth,
    record:state.record
  }
}
const mapDispatchToProps = (dispatch)=>{
  return  bindActionCreators({...AuthActionCreators,...RecordActionCreators,...GarbageActionCreators},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

const ScopedStyle = StyleSheet.create({
  qrcodeContainer:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:"#f2f2f2",
    padding:20,
  },
  qrcode:{
    flex:1
  },
  qrinfoCon:{
    
  },
  rightRow:{

  },
  scoreContainer:{
    display:'flex',
    flexDirection:'row',
    padding:10
  },
  score:{
    flex:1
  },
  scoreValue:{
    
  },
  scoreValueText:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold'
  },
  scoreTitleText:{
    fontSize:20,
    textAlign:'center'
  },
  container: {
    position: 'relative',
    display:'flex',
    flex:1,
  },
  funcContainer:{
    display:'flex',
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20
  },
  func:{
    backgroundColor:Color.white,
    flex:1,
    textAlign:'center',
    padding:20,
    alignItems:'center'
  },
  funcIcon:{
    width:80,
    height:80,
    borderRadius:40,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  iconTitle:{
    padding:10,
    textAlign:'center',
  },
  iconText:{
    fontSize:40,

  },
  ColorOrange:{
    backgroundColor:"#ed9e27"
  },
  ColorBlue2:{
    backgroundColor:"#e28bd6"
  },
  ColorGreen:{
    backgroundColor:"#73bc2c"
  },
  head:{
    width:'100%',
    height:'30%',
    position:'relative'
  },
  headImage:{
    height:'100%',
    width:'100%'
  },
  test:{
    height:'30%',
    width:'90%',
    backgroundColor:Color.red
  },
  bbTitle:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  line:{
    flex:1,
    height:1,
    borderTopWidth:2,
    borderStyle:'solid',
    borderTopColor:Color.b_gray,
    margin:20,
  },
  bigTitle:{
    flex:1
  }
 
})