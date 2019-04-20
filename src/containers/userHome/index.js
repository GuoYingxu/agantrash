import React from 'react'
import {Text,Image,StyleSheet,View,TouchableOpacity,StatusBar} from 'react-native'
import Iconfont from '../../components/iconfont'
import Wrapper from '../../components/wrapper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Style  from '../../style/Style'
import reducer from '../../reducers/demo';
import Color from '../../style/Color';
import { connect } from 'react-redux'
class UserHome extends React.Component{
  static navigationOptions = {
    header: null,
    title: '我的',
    tabBarIcon: ({focused, tintColor}) => {
      // const iconName = focused ? '' : 'faxian'
      return <Image style={{width:60}} resizeMode="contain" source={ focused ? require("../../../assets/images/menu_my2.png"): require("../../../assets/images/menu_my1.png") }/>
    }
  }
  componentWillMount(){
    console.log('willMount')
    // if(!this.props.auth.isLogined){
    //   this.props.navigation.navigate('Login')
    // }
  }
  componentWillReceiveProps(nextProps){
    console.log('willrecive')
    if(nextProps.auth.isLogined){
      //this.props.navigation.n
    }
  }
  componentDidMount(){
    console.log('----didmount')
  }
  toudi = ()=>{
    this.props.navigation.navigate('toudi')
  }
  toExchange=()=>{
    this.props.navigation.navigate('Exchange')
  }
  toHelp = ()=>{
    this.props.navigation.navigate('HelpPage')
  }
  toQrcode = ()=>{
    this.props.navigation.navigate('Qrcode')
  }
  toInvite = ()=>{
    this.props.navigation.navigate('Invite')
  }
  toabout = ()=>{
    this.props.navigation.navigate({routeName:'Article',params:{articleId:1,name:'关于我们'}})
  }
  toSetting = ()=>{
    this.props.navigation.navigate('SettingPage')
  }
  torename = ()=>{
    this.props.navigation.navigate('RenamePage')
  }
  render(){
    if(!this.props.auth.isLogined){
      this.props.navigation.navigate('Login')
    }
    const {auth} = this.props
    return (<Wrapper style={ScopedStyle.container}>
     <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={ScopedStyle.head}>
        <View style={ScopedStyle.avatar}>
          <Image source={require('../../../assets/images/avatar.png')} style={{width:80,height:80}}/>
        </View>
        <TouchableOpacity style={ScopedStyle.userInfo} activeOpacity = {0.9} onPress = {()=>this.torename()}>
          <Text style={{color:Color.white,fontSize:20,fontWeight:'bold',lineHeight:30}}>{auth.nickname}</Text>
          <Text style={{color:Color.white}}>{auth.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.toQrcode()}} style={ScopedStyle.qrcode}>
          <Iconfont name='erweima' size={50} color={Color.white}></Iconfont>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>this.toInvite()} style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="yaoqing"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的邀请</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={ScopedStyle.listItem} onPress = {()=>this.toudi()}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="hezichengxu"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的投递</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress = {()=>this.toExchange()} style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="jifen"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的积分</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0.8} onPress={()=>this.toHelp()}  style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="jiufuqianbaoicon09"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>帮助中心</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity={0.8} onPress = {()=>{this.toSetting()}} style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="xitongshezhi"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>系统设置</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress = {()=>this.toabout()} style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={20} color="#3db0ff" name="guanyuwomen"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>关于我们</Text>
        <View>
          <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
        </View>
      </TouchableOpacity>

    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    auth:state.auth
  }
}
export default connect(mapStateToProps)(UserHome)

const ScopedStyle = StyleSheet.create({
  container: {
    position: 'relative',
    display:'flex',
    flex:1,
  },
  listItem:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    borderBottomWidth:1,
    borderStyle:'solid',
    borderBottomColor:'#ececec'
  },
  listIcon:{

  },
  listTitle:{
    fontSize:18,
    fontWeight:'300',
    flex:1,
    paddingLeft:20
  },
  head:{
    backgroundColor:"#3db0ff",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:10,
    height:150
  },
  avatar:{
    height:60,
    width:60,
    overflow:'hidden',
    borderRadius:30,
    backgroundColor:Color.white,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  userInfo:{
    flex:1,
    paddingLeft:10
  },
  qrcode:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

})