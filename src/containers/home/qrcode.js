import React from 'react'
import QRCode from 'react-native-qrcode' 
import { View,Image,StyleSheet,StatusBar } from 'react-native';
import { connect } from 'react-redux'
class QrcodePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      qrcodeData:null
    }
  }
  static navigationOptions = { 
    title: '我的二维码' 
  }
  componentWillMount(){
    
  }
  render(){
    return (<View style={ScopedStyle.container}>
     <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <QRCode
          value={this.props.auth.access_token}
          size={200}
          bgColor='purple'
          fgColor='white'/>
    </View>)
  }
}
const mapStateToProps = (state)=>{
  return {
    auth:state.auth
  }
}
export default connect(mapStateToProps)(QrcodePage)
const ScopedStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
},
})