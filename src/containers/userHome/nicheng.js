import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as GuidActionCreator from '../../actions/guid'
import * as AuthActionCreator from '../../actions/auth'
import { TextInput } from 'react-native-gesture-handler';
class RenamePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  static navigationOptions = { 
    header:null,
    title: '修改昵称' 
  }
  
  rename = ()=>{
    this.props.navigation.navigate({routeName:'Rename'})
  }
  tosubmit =()=>{
   console.log(this.state.inputValue)
    // this.props.navigation.navigate('Home')
    // this.props.clearSession()
    this.props.changename(this.state.inputValue)
  }
  onChangeText = (text)=>{
    this.setState({
      inputValue:text
    })
  }
  render(){ 
    const {auth} = this.props
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= '修改昵称'></Header>
      <View    style={ScopedStyle.listItem}  >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>当前昵称:</Text>
            <Text style={ScopedStyle.garbageClass}>{auth.nickname}</Text>
        
        </View> 
      </View>
      <View    style={ScopedStyle.listItem} >
        <View style={ScopedStyle.leftCon}>
            <Text style={ScopedStyle.garbageClass}>新的昵称:</Text>
        </View>
        <TextInput style={{flex:1}} value={this.state.inputValue} placeholder = '请输入2-6个汉字或字母组合' onChangeText = {this.onChangeText}>
          
        </TextInput>
      </View>
       
      
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}> 
        <TouchableOpacity activeOpacity = {0.9} onPress={()=>{this.tosubmit()}} style={[ScopedStyle.sendMsgBtn,{borderColor: "#3db0ff" ,backgroundColor:  "#3db0ff"  }]}>
          <Text style={{color: Color.white,fontSize:20,textAlign:'center'}}> 保存昵称</Text>
        </TouchableOpacity>
      </View>
      
    </Wrapper>)
  }
}
const mapStateToProps = (state) => {
  return {
    help:state.help,
    auth:state.auth
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...GuidActionCreator,...AuthActionCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RenamePage)
const ScopedStyle = StyleSheet.create({
  sendMsgBtn:{ 
    width:'80%',
    height:40,
    color:"#3db0ff",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // paddingLeft: 10,
    // paddingTop:4,
    // paddingBottom:4,
    // paddingRight:10,
    borderRadius:20,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#3db0ff",
    margin:'auto',
    textAlign:'center'
  },
  listItem:{
    display:'flex',
    flexDirection:'row',
    //justifyContent:'space-between',
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
   // flex:3,
    
    flexDirection:'row'
  },
  rightCon:{
    marginLeft:20
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