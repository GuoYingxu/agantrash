import React from 'react'
import { View, ViewPropTypes, StatusBar } from 'react-native'
import Style from '../style/Style'
import { NavigationEvents } from 'react-navigation'

export default class Wrapper extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style
  }
  
  onPageFocus = () => {
    if(!Adapter.isIOS) {
      //修复安卓一定概率状态栏沉浸式效果失效
      StatusBar.setTranslucent(true)
    }
  }
  
  render(){
    return (
      <View style={[Style.wrapper, this.props.style]}>
        <NavigationEvents onWillFocus={this.onPageFocus} />
        { this.props.children }
      </View>
    )
  }
}