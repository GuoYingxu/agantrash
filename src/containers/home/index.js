import React from 'react'
import {ScrollView,Text,Image,StyleSheet,View,TouchableOpacity,StatusBar,Dimensions} from 'react-native'
import Iconfont from '../../components/iconfont'
import Wrapper from '../../components/wrapper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Style  from '../../style/Style'
import reducer from '../../reducers/demo';
import Color from '../../style/Color';
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import * as AuthActionCreators from '../../actions/auth'
import * as RecordActionCreators from '../../actions/record'
import * as GarbageActionCreators from '../../actions/garbage'
import { bindActionCreators } from 'redux';
const { width, height } = Dimensions.get('window')
 
// const carouselHeight = carouselWidth*carouselRati
class Home extends React.Component{

  static navigationOptions = {
    header: null,
     title: '',
    tabBarIcon: ({focused, tintColor}) => {
      // const iconName = focused ? '' : 'faxian'
      return <Image style={{width:60}} resizeMode="contain" source={ focused ? require("../../../assets/images/menu_index2.png"): require("../../../assets/images/menu_index1.png") }/>
      // return <Iconfont name='shouye' size={24} color={tintColor} />
    }
  }
  showQrcode= ()=>{
    if(this.props.auth.isLogined){
      this.props.navigation.navigate('Qrcode')
    }else{
      this.props.navigation.navigate('Login')
    }
  }
  componentWillMount(){
    this.props.checkLoginState()
    this.props.getGarbageClass() 
  }
  componentWillReceiveProps(nextProps){
    console.log('-------------willreceive', this.props.navigation.isFocused())
    if(nextProps.auth.isLogined == true && nextProps.record.loaded == false){
      this.props.getRecord()
      this.props.freshpoints()
    } 
  }
  componentDidMount(){
    this._didFocusSubscription = this.props.navigation.addListener('didFocus', payload =>{
      //console.log(payload)
      if(this.props.auth.isLogined){
        this.props.getRecord()
        this.props.freshpoints()
      }
    });
    console.log('---didmount',this.props.navigation.isFocused())
  }
  componentWillUnmount(){
    this._didFocusSubscription && this._didFocusSubscription.remove();
  }
  componentWillUpdate(){
    console.log('----willupdate',this.props.navigation.isFocused())
  }
  componentDidUpdate(){
    console.log('----didUpdate',this.props.navigation.isFocused())
  }
  toGuid = ()=>{
    this.props.navigation.navigate('GuidPage')
  }
  toGarbage = ()=>{
    this.props.navigation.navigate('Garbage')
  }
  toYq = ()=>{
    this.props.navigation.navigate('Yq')
  }
  renderPage = (item,index)=>{
    //console.log(item,index)
    if(item==1){ 
      return <View>
      <Image style={ScopedStyle.headImage} source = {require('../../../assets/images/hd1.png')}></Image>
    </View>
    }
    if(item==2){

      return <View>
      <Image style={ScopedStyle.headImage} source = {require('../../../assets/images/hd2.png')}></Image>
    </View>
    }
    if(item==3){

      return <View>
      <Image style={ScopedStyle.headImage} source = {require('../../../assets/images/hd3.png')}></Image>
    </View>
    }
//    return  <View  >
//     <Text  >{ item.url }</Text>
// </View>
      // return <Image style={ScopedStyle.headImage}  source={{uri:item.url}} resizeMode="cover"  />
  }
  onSnapToItem = (index) => {
    // if(this.pageDots) {
    //   this.pageDots.setPagination(index)
    // }
  }
  render(){
    const {auth,record} = this.props
  //   const  data = [{url:'https://basecdn.aganjinrong.com/FmCteVYTHO4KmHZlbssxac51PuKI'},
  //   {url:'https://basecdn.aganjinrong.com/FgxfeMfqYzgdFDKnh8KjBOQnu32y'},
  //   {url:'https://basecdn.aganjinrong.com/FljRVmxXHsbENzGXDY9fe76bGpzI'}
  // ]a
    const data = [1,2,3]
    return (
      <Wrapper style ={ScopedStyle.container}>
        <StatusBar
          animated={true}
          hidden={true}
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        
        <View style= {ScopedStyle.head}> 
          <View style={ScopedStyle.headIcon}>
            <Image style={{width:40,height:40}} source = {require('../../../assets/images/logo_w.png')}></Image>
          </View>
          <View style= {ScopedStyle.headTitle}>
            <Text style={{fontSize:18,color:Color.white}}>智能垃圾回收平台</Text>
          </View>
          <View style={ScopedStyle.headMessage}>
            <Iconfont name='tongzhi' size={30} color={Color.white}></Iconfont>
          </View>
        </View>
        <ScrollView horizontal={false}>
        <View style={ScopedStyle.banner}>
          <Carousel
                data={data}
                autoplay={true}
                autoplayDelay={1000}
                autoplayInterval={3000}
                loop={true}
                renderItem={({item, index})=>this.renderPage(item,index)}
                sliderWidth={width}
                itemWidth={width}
                inactiveSlideScale={1}
                lockScrollWhileSnapping={true}
                inactiveSlideOpacity={1}
                firstItem={0}
                // enableMomentum={false}
                // activeSlideOffset={100}
                // onSnapToItem={this.onSnapToItem.bind(this)}
              />
              {/* <PaginationDots ref={(r) => this.pageDots = r} carouselData={data} /> */}
          {/* <Image style={ScopedStyle.headImage}  source={require('../../../assets/images/head1.png')} resizeMode="cover"  /> */}
        </View>
        <View style={ScopedStyle.funcContainer}>
          <View style={ScopedStyle.func}>
            <TouchableOpacity style={[ScopedStyle.funcIcon,ScopedStyle.ColorOrange]}  activeOpacity={1}  onPress= {()=>{
          this.toGarbage()
        }}>
              {/* <Iconfont name='fenlei' size={24} color={Color.white}></Iconfont> */}
              <Image style={{width:30,height:30}} source={require('../../../assets/images/garbageclass.png')} resizeMode='cover'/>
            </TouchableOpacity>
            <View  style={ScopedStyle.iconTitle}><Text>回收分类</Text></View>
          </View>
          <View  style={ScopedStyle.func}>
            <TouchableOpacity activeOpacity= {1} onPress={()=>this.toYq()} style={[ScopedStyle.funcIcon,ScopedStyle.ColorBlue2]}>
            <Image style={{width:30,height:30}} source={require('../../../assets/images/invite.png')} resizeMode='cover'/>
            </TouchableOpacity>
            <View  style={ScopedStyle.iconTitle}><Text>邀请有礼</Text></View>
          </View>
          <View style={ScopedStyle.func}>
            <TouchableOpacity activeOpacity = {1}  onPress={()=>{this.toGuid()}}  style={[ScopedStyle.funcIcon,ScopedStyle.ColorGreen]}>
            <Image style={{width:30,height:30}} source={require('../../../assets/images/helpinfo.png')} resizeMode='cover'/>
            </TouchableOpacity>
            <View style={ScopedStyle.iconTitle}><Text class={ScopedStyle.iconText}>入门指南</Text></View>
          </View>
        </View>
        <View style={ScopedStyle.bbTitle}>
          <View style={ScopedStyle.line}></View>
          <View style = {ScopedStyle.bigTitle}>
            <Text style={{fontSize:18,textAlign:'center'}}>我的投递</Text>
          </View>
          <View style={ScopedStyle.line}></View>
        </View>
        <View style={ScopedStyle.scoreContainer}>
          <View style={ScopedStyle.score}>
            <View style={ScopedStyle.scoreValue}><Text style={ScopedStyle.scoreValueText}>{auth && auth.userInfo && auth.userInfo.points || 0}</Text></View>
            <View style={ScopedStyle.scoreTitle}><Text style={ScopedStyle.scoreTitleText}>当前积分</Text></View>
          </View>
          <View style={ScopedStyle.score}>
            <View style={ScopedStyle.scoreValue}><Text style={ScopedStyle.scoreValueText}>{record.total||0}</Text></View>
            <View style={ScopedStyle.scoreTitle}><Text style={ScopedStyle.scoreTitleText}>投递次数</Text></View>
          </View>
        </View>
        <View style={ScopedStyle.qrcodeContainer} >
          <TouchableOpacity style={ScopedStyle.qrcode} activeOpacity = {1}  onPress={()=>this.showQrcode()}>
            <Iconfont name='erweima' color="#91d64b" size={80}></Iconfont>
          </TouchableOpacity>
          <TouchableOpacity style={ScopedStyle.qrinfoCon} activeOpacity = {1}  onPress={()=>this.showQrcode()}>
            <Text style={{fontSize:18,fontWeight:'bold',lineHeight:24}}>我的二维码</Text>
            <Text style={{fontSize:12,lineHeight:20}}>1.打开二维码</Text>
            <Text style={{fontSize:12,lineHeight:20}}>2.放入智能垃圾箱扫描设备</Text>
            <Text style={{fontSize:12,lineHeight:20}}>3.开箱投递垃圾</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ScopedStyle.rightRow} activeOpacity = {1}   onPress={()=>this.showQrcode()}>
            <Iconfont name='iconfontjiantou3' color="#91d64b" size = {40}></Iconfont>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state,props)=>{
  return {
    auth:state.auth,
    record:state.record,
    //isFocus: props.navigation.isFocused
  }
}
const mapDispatchToProps = (dispatch)=>{
  return  bindActionCreators({...AuthActionCreators,...RecordActionCreators,...GarbageActionCreators},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

const ScopedStyle = StyleSheet.create({
  qrcodeContainer:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:"#f2f2f2",
    padding:20,
    marginTop:20,
    // marginTop:10,
    alignItems:'center'
  },
  qrcode:{
  },
  qrinfoCon:{
    flex:1,
    paddingLeft:20 
  },
  rightRow:{
    marginLeft:10
  },
  scoreContainer:{
    display:'flex',
    flexDirection:'row',
    paddingTop:15,
    paddingBottom:15
  },
  score:{
    flex:1
  },
  scoreValue:{
    
  },
  scoreValueText:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold'
  },
  scoreTitle:{
    marginTop:10
  },
  scoreTitleText:{
    fontSize:18,
    textAlign:'center'
  },
  container: {
    position: 'relative',
    display:'flex',
    flex:1,
  },
  funcContainer:{
    display:'flex',
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20
  },
  func:{
    backgroundColor:Color.white,
    flex:1,
    textAlign:'center',
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center'
  },
  funcIcon:{
    width:60,
    height:60,
    borderRadius:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  iconTitle:{
    padding:10,
    textAlign:'center',
  },
  iconText:{
    fontSize:30,

  },
  ColorOrange:{
    backgroundColor:"#ed9e27"
  },
  ColorBlue2:{
    backgroundColor:"#e28bd6"
  },
  ColorGreen:{
    backgroundColor:"#73bc2c"
  },
  head:{
    height:50  ,
    backgroundColor:'#3db0ff' ,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  headerIcon:{
    width:80
  },
  headTitle:{
    flex:1
  },
  headerMessage:{
    width:100,
    paddingRight:20
  },
  banner:{
    width:'100%',
    height: Math.floor(width*9/16),
    position:'relative'
  },
  headImage:{
    height: Math.floor(width*9/16),
    width:'100%'
  },
  test:{
    height:'30%',
    width:'90%',
    backgroundColor:Color.red
  },
  bbTitle:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  line:{
    flex:1,
    height:1,
    borderTopWidth:1,
    borderStyle:'solid',
    borderTopColor:"#e4e4e4",
    margin:10,
  },
  bigTitle:{
    flex:1
  }
 
})