import React from 'react'
import { View, StatusBar ,Image,TouchableOpacity,Text,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import * as AuthActionCreators from '../actions/auth'
import { bindActionCreators } from 'redux';
import Color from '../../config/color';
class LoadingScreen extends React.Component {
  componentDidMount(){
    
    // this.props.navigation.navigate('App')
    this.props.checkLoginState()
  }
  login=()=>{
    this.props.navigation.navigate('Login')
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar translucent={true} hidden={true} />
        <Image resizeMode='stretch' source={require('../../assets/images/launch_screen.png')} style={{width: '100%', flex:1}} ></Image>
        <View style={{position:'absolute',top:'60%',width:'100%',display:'flex',flexDirection:'row',padding:40,justifyContent:'center'}}>
        
          <TouchableOpacity style={[Style.button,Style.login]} onPress={()=> this.login()}>
            <Text style={{color:Color.white}}>登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...AuthActionCreators},dispatch)
}
export default connect(null,mapDispatchToProps)(LoadingScreen)

const Style = StyleSheet.create({
  button:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:Color.white,
    borderRadius:4,
    margin:10
  },
  reg:{
    backgroundColor:Color.white,
  },
  login:{
    backgroundColor:Color.green
  }
})