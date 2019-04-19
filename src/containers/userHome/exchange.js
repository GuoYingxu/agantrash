import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import {formartDate} from '../../util'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as ExchangReducerCreator from '../../actions/exchange'
class ExChange extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '我的积分' 
  }
  componentDidMount(){
    this.props.getExchange(1)
  }
  _renderItem = ({item})=>{
    return (<View style={ScopedStyle.listItem} >
    <View style={ScopedStyle.leftCon}>
        <Text style={ScopedStyle.garbageClass}>{  item.exchangeGoodsName}</Text>
        <Text style = {ScopedStyle.time}>{formartDate(item.exchangeTime)}</Text>
    </View>
    <View style={ScopedStyle.rightCon}>
      <Text style={ScopedStyle.score}>-{item.exchangePoints}</Text>
    </View>
  </View>)
  }
  onEndReached= ()=>{
    console.log('endReached')
    if(this.props.exchange.total > this.props.exchange.list.length) {
      this.props.getExchange(this.props.exchange.page +1)
    }
  }
  render(){
    const {exchange}  = this.props;
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '我的积分'></Header>
      <View style={{backgroundColor:"#3db0ff",display:'flex',flexDirection:'row',justifyContent:'center',padding:30,alignItems:'center'}}>
        <View style={{paddingRight:10}}>
          <Iconfont name='jifen' size={40} color={Color.white}></Iconfont>
        </View>
        <View style={{paddingLeft:10}}>
          <Text style={{color:Color.white,fontSize:20}}>120</Text>
          <Text style={{color:Color.white}}>当前积分</Text>
        </View>
      </View>
      <View style={{backgroundColor:'#249dee'}}>
        <Text style={{textAlign:'center',lineHeight:35,fontSize:18,color:Color.white}}>积分兑换</Text>
      </View>
      <FlatList
        extraData= {this.props.exchange}
        data = {exchange.list}
        renderItem = {this._renderItem}
        keyExtractor={(item,index)=>'invite'+item.exchangeId} 
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
          }}><Text style={{lineHeight:80}}>您当前没有兑换记录!</Text>{/*通过transform scaleY抵消RN0.57.1新出现的bug*/}</View>}
      ></FlatList>
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    exchange:state.exchange,
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...ExchangReducerCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ExChange)
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