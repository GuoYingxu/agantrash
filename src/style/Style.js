import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Color from './Color'
import Constants, { rem } from './Constants'
import ColorTool from 'color'

const isIOS = Platform.OS === 'ios' ? true : false
const { width, height } = Dimensions.get('window')
const StatusBarHeight = getStatusBarHeight()
const FEED_INFO_ICON_SIZE = 24

const Style = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    position: 'relative',
    flex: 1,
    flexDirection: 'column'
  },
  fullWidth:{
    width: width
  },
  header: {
    position: 'relative',
    //height: isIOS ? 70 : 50,
    height: StatusBarHeight + 50,
    backgroundColor: Color.red,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    //paddingTop: isIOS ? 30 : 10,
    paddingTop: StatusBarHeight + 10,
    zIndex: 1000
  },
  headerTitle: {
    color: Color.white,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    position: 'absolute',
    //top: isIOS ? 20 : 0,
    top : StatusBarHeight,
    left: width/2,
    width: 160,
    textAlign: 'center',
    transform: [{ translateX: -80}]
  },
  headerAvatar: {
    position: 'relative',
    width: 30,
    height: 30
  },
  headerAvatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  headerAvatarBand: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: Color.red,
    top: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerAvatarBandCenter: {
    width:6,
    height:6,
    borderRadius:3,
    backgroundColor: Color.orange,
  },
  searchSection: {
    width: width - 100,
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: `rgba(${Color.black_rgb},0.1)`
  },
  searchSection_search: {
    width: width - 60,
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: Color.white
  },
  searchSectionIcon: {
    color: `rgba(${Color.white_rgb},0.5)`,
    marginTop: isIOS ? 3 : 5,
    marginLeft: 8
  },
  searchSectionIcon_search: {
    color: Color.f_body,
    marginTop: isIOS ? 5 : 7,
    marginLeft: 14
  },
  searchSectionInput: {
    color: Color.f_placeholder,
    marginLeft: 9,
    width: width-80,
    padding: 0
  },
  searchSectionInput_search: {
    color: Color.f_placeholder,
    marginLeft: 9,
    width: width-100,
    padding: 0,
    color: Color.f_title
  },
  searchSectionClear_search: {
    color: Color.f_placeholder,
    marginTop: isIOS ? 5 : 7,
    marginLeft: 9
  },
  headerCancel: {
    marginTop: isIOS ? 8 : 5,
    color: Color.white,
    fontSize: 14
  },
  headerAddBtn: {
    color: Color.white
  },
  feed: {
    flex: 1,
    backgroundColor: Color.white,
    padding:10,
    flexDirection: 'column'
  },
  feedQuote: {
    flex: 1,
    borderRadius:2,
    backgroundColor: Color.b_high,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 14
  },
  feedInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:-10,
    minHeight: 24*rem
  },
  feedInfoContent:{
    lineHeight:14,
    marginRight:10,
    fontSize:12,
    color:Color.f_assist
  },
  feedInfoUser: {
    flex: 1,
    flexDirection: 'row'
  },
  feedInfoAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  feedInfoName: {
    lineHeight: 30,
    marginLeft: 10,
    fontSize: 14,
    color: Color.f_title
  },
  feedInfoTime: {
    marginTop: 7,
    color: Color.f_assist,
    marginLeft: 10
  },
  feedInfoIcon: {
    width:FEED_INFO_ICON_SIZE,
    lineHeight:FEED_INFO_ICON_SIZE,
    height:FEED_INFO_ICON_SIZE
  },
  feedInfoMenuTrigger: {
    paddingHorizontal:10,
    paddingVertical: 5
  },
  feedTitle: {
    marginTop: 4,
    color: Color.f_title,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 24
  },
  feedTitleBadge: {
    height:20,
    lineHeight:20,
    backgroundColor: Color.theme,
    borderRadius:2,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    color:Color.white,
    fontSize:11
  },
  feedFollowsTitle: {
    marginBottom: 2,
    color: Color.f_title,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20
  },
  feedContent: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  feedPic:{
    flex:1,
    flexDirection:'row'
  },
  feedMenuOptionsContainer:{
    width:80,
    marginTop: -120,
    marginLeft:-10
  },
  feedCover: {
    width: 110,
    height: 66,
    marginLeft: 10
  },
  feedBrief: {
    color: Color.f_body,
    lineHeight: 24,
    fontSize: 15,
    //textAlign: 'justify',
    flex:1
  },
  feedBriefLarge: {
    // color: Color.f_body,
    // lineHeight: 24,
    // fontWeight: 'normal',
    // fontSize:16,
    flex:1
  },
  orgBlock: {
    flex: 1,
    backgroundColor: Color.white
  },
  orgBlockHeader: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: Color.l_light
  },
  orgBlockHeaderTitle: {
    fontSize: 16
  }
})

export default Style
