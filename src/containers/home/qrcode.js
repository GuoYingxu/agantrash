import React from 'react'
import QRCode from 'react-native-qrcode' 
import { View,Image,StyleSheet,StatusBar,Text } from 'react-native';
import { connect } from 'react-redux'
import {Buffer} from 'buffer'
class QrcodePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      qrcodeData:null
    }
  }
  componentDidMount(){
    let b = new Buffer(`userId=${this.props.auth.id}`)
    let s = b.toString('base64')
    this.setState({
      qrcodeData: s
    })
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
      {
        this.state.qrcodeData && 
      <QRCode
          value={this.state.qrcodeData}
          size={200}
          bgColor='black'
          fgColor='white'/>
      }
      <View style={{padding:40,textAlign:'left'}}>
        <Text>将此二维码放入智能垃圾箱二维码扫描设备中，开箱投递垃圾</Text>
      </View>
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