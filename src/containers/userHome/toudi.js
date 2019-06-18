import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import {formartDate} from '../../util'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as RecordReducerCreator  from '../../actions/record'
class Toudi extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '我的投递' 
  }
  _renderItem = ({item})=>{
    return (<View style={ScopedStyle.listItem} >
    <View style={ScopedStyle.leftCon}>
        <Text style={ScopedStyle.garbageClass}>{  item.garbageTypeName+'('+item.weight+'克)'}</Text>
        <Text style = {ScopedStyle.time}>{item.deliveryTimeStr}</Text>
    </View>
    <View style={ScopedStyle.rightCon}>
      <Text style={ScopedStyle.score}>+{item.rewardsPoints}</Text>
    </View>
  </View>)
  }
  onEndReached= ()=>{
    console.log('endReached')
    if(this.props.record.total > this.props.record.list.length) {
      console.log(this.props.record.page)
      this.props.getRecord(parseInt(this.props.record.page) +1)
    }
  }
  componentDidMount(){
    this.props.getRecord()
  }
  render(){
    const {record}  = this.props;
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '我的投递'></Header>
      <FlatList
        extraData= {this.props.record}
        data = {record.list}
        renderItem = {this._renderItem}
        keyExtractor={(item,index)=>'trashType'+item.deliveryId} 
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
          }}><Text style={{lineHeight:80}}>您当前没有投递记录!</Text>{/*通过transform scaleY抵消RN0.57.1新出现的bug*/}</View>}
      ></FlatList>
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    record:state.record,
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...RecordReducerCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Toudi)
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