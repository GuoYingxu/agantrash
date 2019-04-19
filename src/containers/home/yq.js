import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar} from 'react-native'
import Color from '../../../config/color';
import Header from '../../components/trashHeader'

// import {bindActionCreators} from 'redux'
// import * as GarbageReducerCreator  from '../../actions/garbage'
class Yq extends React.Component{

  static navigationOptions = { 
    header:null,
    title: '邀请有礼' 
  }
 
  
  // onEndReached= ()=>{
  //   console.log('endReached')
  //   if(this.props.record.total > this.props.record.list.length) {
  //     this.props.getRecord(this.props.record.page +1)
  //   }
  // }
  render(){
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '邀请有礼'></Header>
      <View>
        <Text style={{textAlign:'center',fontSize:14,lineHeight:60}}>详细内容</Text>
      </View>
    </Wrapper>)
  }
}
export default connect(null)(Yq)
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