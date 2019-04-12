import React from 'react'
import {Text,Image,StyleSheet,View,TouchableOpacity} from 'react-native'
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
      return <Iconfont name='weibiaoti2fuzhi12' size={24} color={tintColor} />
    }
  }
  toudi = ()=>{
    this.props.navigation.navigate('toudi')
  }
  render(){
    const {auth} = this.props
    console.log(auth)
    return (<Wrapper style={ScopedStyle.container}>
      <View style={ScopedStyle.head}>
        <View style={ScopedStyle.avatar}>
          <Iconfont size={70} name='nanzhi'></Iconfont>
        </View>
        <View style={ScopedStyle.userInfo}>
          <Text style={{color:Color.white,fontSize:20,fontWeight:'bold',lineHeight:50}}>{auth.username}</Text>
          <Text style={{color:Color.white}}>{auth.phone}</Text>
        </View>
        <View style={ScopedStyle.qrcode}>
          <Iconfont name='erweima' size={70} color={Color.white}></Iconfont>
        </View>
      </View>
      <TouchableOpacity style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="yaoqing"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的邀请</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ScopedStyle.listItem} onPress = {()=>this.toudi()}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="hezichengxu"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的投递</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="jifen"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>我的积分</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="jiufuqianbaoicon09"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>帮助中心</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="xitongshezhi"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>系统设置</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ScopedStyle.listItem}>
        <View Style={ScopedStyle.listIcon}>
          <Iconfont  size={30} color="#128bd6" name="guanyuwomen"></Iconfont>
        </View>
        <Text style={ScopedStyle.listTitle}>关于我们</Text>
        <View>
          <Iconfont size={30} color='#cecece' name='you-jiantou'></Iconfont>
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
    fontSize:26,
    fontWeight:'500',
    flex:1,
    paddingLeft:20
  },
  head:{
    backgroundColor:"#128bd6",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:30,
    paddingBottom:30
  },
  avatar:{
    height:90,
    width:90,
    borderRadius:45,
    backgroundColor:Color.white,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  userInfo:{
    flex:1,
    padding:20
  },
  qrcode:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

})