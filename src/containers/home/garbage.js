import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import {formartDate} from '../../util'
import Header from '../../components/trashHeader'

// import {bindActionCreators} from 'redux'
// import * as GarbageReducerCreator  from '../../actions/garbage'
class Garbage extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '回收分类' 
  }
  toInfo = ()=>{

  }
  _renderItem = ({item})=>{
    return (<TouchableOpacity activeOpacity = {0.9} style={ScopedStyle.listItem}  onPress = {()=>this.toInfo()}>
    <View style={ScopedStyle.leftCon}>
        <Text style={ScopedStyle.garbageClass}>{  item.typeName}</Text>
        {/* <Text style = {ScopedStyle.time}>{formartDate(item.deliveryTime)}</Text> */}
    </View>
    <View>
       <Iconfont size={20} color='#cecece' name='youjiantou'></Iconfont>
    </View>
    {/* <View style={ScopedStyle.rightCon}>
      <Text style={ScopedStyle.score}>+{item.rewardsPoints}</Text>
    </View> */}
  </TouchableOpacity>)
  }
  // onEndReached= ()=>{
  //   console.log('endReached')
  //   if(this.props.record.total > this.props.record.list.length) {
  //     this.props.getRecord(this.props.record.page +1)
  //   }
  // }
  render(){
    const {garbage}  = this.props;
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '回收分类'></Header>
      <FlatList
        extraData= {this.props.garbage}
        data = {garbage.type}
        renderItem = {this._renderItem}
        keyExtractor={(item,index)=>'trashType'+item.typeId} 
        enableEmptySections={true}
        // onEndReached={this.onEndReached}
        // onEndReachedThreshold={this.props.onEndReachedThreshold || 0.1}
        ListEmptyComponent={() => <View
          style={{
            transform: [{scaleY: this.props.inverted ? -1 : 1}],
            height: 'auto',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}><Text style={{lineHeight:80}}>获取数据失败</Text>{/*通过transform scaleY抵消RN0.57.1新出现的bug*/}</View>}
      ></FlatList>
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    garbage:state.garbage,
  }
}
export default connect(mapStateToProps)(Garbage)
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