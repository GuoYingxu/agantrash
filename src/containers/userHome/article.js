import React from 'react'
import Wrapper from '../../components/wrapper';
import {connect} from 'react-redux'
import {View ,Text,StyleSheet ,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import Header from '../../components/trashHeader'
import {bindActionCreators} from 'redux'
import * as GuidActionCreator from '../../actions/guid'
import { ScrollView } from 'react-native-gesture-handler';
class ArtPage extends React.Component{
  constructor(props){
    super(props)
   
  }
  static navigationOptions = { 
    header:null,
    title: '文章内容' 
  }
  componentDidMount(){
    if(!this.props.withContent){

      this.props.getArticle(this.props.articleId)
    }
  }
  render(){
    const {article,withContent,content} = this.props
    return (<Wrapper>
   <StatusBar
        animated={true}
        hidden={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Header title= {this.props.name}></Header>
      <ScrollView>
      {
        (!withContent && article.title) ?  (<View>
          <Text style={{fontSize:20,color:Color.black,fontWeight:'bold',padding:20,lineHeight:24}}>{article.title}</Text>
          </View>) : <Text></Text>
      }
      {
        (!withContent && article.content) ? (<View style={{paddingHorizontal:20}}><Text style={{fontSize:14,lineHeight:20,color:Color.f_body}}>{article.content}</Text></View>) :null
        
      }
       {
        withContent  ? (<View style={{paddingHorizontal:20}}><Text style={{fontSize:14,lineHeight:20,color:Color.f_body}}>{content || '(管理员偷懒了，还没有编辑该内容...)'}</Text></View>) :null
        
      }
      {
        (!withContent && !article.content) ? <View><Text style={{fontSize:14,textAlign:'center',lineHeight:60}}>正在加载...</Text></View> : null
      } 
      </ScrollView>
    </Wrapper>)
  }
}
const mapStateToProps = (state,props) => {
  return {
    articleId: props.navigation.state.params.articleId,
    name:props.navigation.state.params.name,
    article: state.article,
    withContent: props.navigation.state.params.withContent,
    content: props.navigation.state.params.content
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({...GuidActionCreator},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtPage)
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