import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import {formartDate} from '../../util'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as InviteReducerCreator from '../../actions/invite'
class Invite extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '我的邀请' 
  }
  componentDidMount(){
    this.props.getInvite(1)
  }
  _renderItem = ({item})=>{
    return (<View style={ScopedStyle.listItem} >
    <View style={ScopedStyle.leftCon}>
        <Text style={ScopedStyle.garbageClass}>{  item.inviteUser && (item.inviteUser.nickname || item.inviteUser.phone)}</Text>
        <Text style = {ScopedStyle.time}>{formartDate(item.inviteTime)}</Text>
    </View>
    <View style={ScopedStyle.rightCon}>
      <Text style={ScopedStyle.score}>+{item.rewardsPoints}</Text>
    </View>
  </View>)
  }
  onEndReached= ()=>{
    console.log('endReached')
    if(this.props.invite.total > this.props.invite.list.length) {
      this.props.getInvite(this.props.invite.page +1)
    }
  }
  render(){
    const {invite}  = this.props;
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '我的邀请'></Header>
      <FlatList
        extraData= {this.props.invite}
        data = {invite.list}
        renderItem = {this._renderItem}
        keyExtractor={(item,index)=>'invite'+item.inviteId} 
        enableEmptySections={true}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={this.props.onEndReachedThreshold || 0.1}
        ListEmptyComponent={() => <View
          style={{
            transform: [{scaleY: this.props.inverted ? -1 : 1}],
            height: 'auto',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}><Text style={{lineHeight:80}}>您当前没有邀请记录!</Text>{/*通过transform scaleY抵消RN0.57.1新出现的bug*/}</View>}
      ></FlatList>
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    invite:state.invite,
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...InviteReducerCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Invite)
const ScopedStyle = StyleSheet.create({
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
    flexDirection:'column'
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