import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { NavigationActions } from 'react-navigation'
import Iconfont from '../components/iconfont'
class TrashHeader extends React.Component{
  constructor(props){
    super(props)
  }
  back = ()=>{
    this.props.dispatch(NavigationActions.back())
  }
  render(){
    const {title} = this.props
    return (<View style= {ScopedStyle.head}> 
      <TouchableOpacity style={ScopedStyle.headIcon} onPress = {()=> {this.back()}}>
        <Iconfont name='iconfontjiantou1' size={20} color={Color.white}></Iconfont>
      </TouchableOpacity>
      <View style= {ScopedStyle.headTitle}>
        <Text style={{fontSize:20,color:Color.white}}>{title}</Text>
      </View>
      
    </View>)
  }
}

const localAction = {
  dispatch(action){
    return (dispatch) =>{
      dispatch(action)
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...localAction }, dispatch)
}

export default connect(null,mapDispatchToProps)(TrashHeader)
const ScopedStyle = StyleSheet.create({ 
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
  }
})