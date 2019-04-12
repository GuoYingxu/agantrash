import React from 'react'
import QRCode from 'react-native-qrcode' 
import { View,Image,StyleSheet } from 'react-native';
import { connect } from 'react-redux'
class QrcodePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      qrcodeData:null
    }
  }
  componentWillMount(){
    
  }
  render(){
    return (<View style={ScopedStyle.container}>
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