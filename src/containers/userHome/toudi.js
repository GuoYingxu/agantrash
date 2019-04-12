import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet } from 'react-native'
import Color from '../../../config/color';
class Toudi extends React.Component{
  formartTime = (time)=>{
    const date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth()>=9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate()>=10 ? date.getDate() : '0' + date.getDate()} ${ date.getHours()>=10? date.getHours() : ('0'+date.getHours())}:${date.getMinutes() >=10?date.getMinutes() : '0'+date.getMinutes()}`
  }
  render(){
    const {record,garbage}  = this.props

    return (<Wrapper>

      {
        record.list.map(r => {
          return <View style={ScopedStyle.listItem} key={r.deliveryId}>
            <View style={ScopedStyle.leftCon}>
                <Text style={ScopedStyle.garbageClass}>{  r.garbageTypeName}</Text>
                <Text style = {ScopedStyle.time}>{this.formartTime(r.deliveryTime)}</Text>
            </View>
            <View style={ScopedStyle.rightCon}>
              <Text style={ScopedStyle.score}>+{r.rewardsPoints}</Text>
            </View>
          </View>
        })
      }
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    record:state.record,
    garbage:state.garbage
  }
}

export default connect(mapStateToProps)(Toudi)
const ScopedStyle = StyleSheet.create({
  listItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderColor:'#dcdcdc'
  },
  garbageClass:{
    fontSize:18,
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
    color:Color.red,
  }
})