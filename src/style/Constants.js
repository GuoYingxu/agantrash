import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Dimensions, Platform } from 'react-native';

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;

/**
 * 响应式单位rem，根据屏幕尺寸(宽度)自动调整字体/行高/边距等尺寸大小
 * 基准大小为iphone6尺寸宽度375
 * 通过该单位实现不同尺寸不同分辨率手机UI布局效果的统一
 */
const originWidth = 375;
const maxWidth = 1000;
const remWidth = sWidth > maxWidth ? maxWidth : sWidth
export const rem = remWidth / 375;

export default Constants = {
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  
  HEADER_HEIGHT: 44*rem, //顶部栏高度
  SB_HEIGHT: 30*rem, //顶部搜索栏高度
  HEADER_AVATAR_SIZE: 30*rem, //顶部栏头像大小
  HEADER_ICON_SIZE: 28*rem, //顶部图标默认大小
  FSIZE_HEADER_TITLE: 18*rem, //顶部标题字体
  FSIZE_HEADER_DUAL_TITLE: 16*rem, //顶部主副标题中主标题的字体
  FSIZE_HEADER_DUAL_SUB: 12*rem, //顶部主副标题中副标题的字体
  
  SEPARATOR_HEIGHT: 8*rem, //分割线默认高度
  
  TAB_HEIGHT: 44*rem, //tab默认高度
  FSIZE_TAB: 16*rem, //tab默认字体
  
  COMMON_SPACE: 10*rem, //页面左右通用空白间距
  COMMON_SPACE_LARGE: 15*rem, //较大的通用间距
  FSIZE_FEED_TITLE: 18*rem, //信息流标题字体
  FSIZE_FEED_BRIEF: 15*rem, //信息流简介字体 & 评论字体
  LHEIGHT_FEED_TITLE: 24*rem, //信息流标题行高
  LHEIGHT_FEED_BRIEF: 24*rem, //信息流简介行高 & 评论行高
  QUOTE_BADGE_HEIGHT: 52*rem, //讨论中引用的企业/对比等内容的头部图片尺寸
  QUOTE_BADGE_WIDTH: 98*rem, //讨论中引用的企业/对比等内容的头部图片尺寸
  
  FSIZE_ARTICLE_CONTENT: 18*rem, //文章正文字体
  LINE_HEIGHT_ARTICLE: 32*rem, //文章行高
  
  CAROUSEL_RATIO: 176/710, //首页轮播的高宽比
  
  STATUSBAR_HEIGHT: getStatusBarHeight(),
  SCREEN_WIDTH: sWidth,
  SCREEN_HEIGHT: sHeight
}
