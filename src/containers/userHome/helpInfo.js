import React from 'react'
import Wrapper from '../../components/wrapper';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Color from '../../../config/color';
import Iconfont from '../../components/iconfont'
import Header from '../../components/trashHeader'
import { bindActionCreators } from 'redux'
import * as GuidActionCreator from '../../actions/guid'
class HelpPage extends React.Component {

    static navigationOptions = {
      header: null,
      title: '帮助中心'
    }
    componentDidMount() {
      this.props.getHelp(1)
    }
    toInfo = (id) => {
      this.props.navigation.navigate({ routeName: 'Article', params: { articleId: id, name: '帮助中心' } })
    }
    _renderItem = ({ item }) => {
        return ( <TouchableOpacity onPress = {() => this.toInfo(item.articleId) }
          activeOpacity = { 0.9 }
          style = { ScopedStyle.listItem } >
          <View style = { ScopedStyle.leftCon } >
            <Text style = { ScopedStyle.garbageClass } > { item.articleTitle } </Text> 
          </View> 
          <View >
          <Iconfont size = { 20 } color = '#cecece'
          name = 'youjiantou' > </Iconfont> 
          </View> 
          </TouchableOpacity>)
        }
        onEndReached = () => {
          console.log('endReached')
          if (this.props.help.total > this.props.help.list.length) {
            this.props.getGuid(this.props.help.page + 1)
          }
        }
        render() {
          const { help } = this.props;
          return ( <Wrapper>
            <StatusBar animated = { true }
            hidden = { true }
            backgroundColor = { 'transparent' }
            translucent = { true }
            barStyle = { 'dark-content' }
            /> 
              <Header title = '入门指南' > </Header> 
              <FlatList extraData = { this.props.help }
                data = { help.list }
                renderItem = { this._renderItem }
                keyExtractor = {(item, index) => 'invite' + item.articleId }
                enableEmptySections = { true }
                onEndReached = { this.onEndReached }
                onEndReachedThreshold = { this.props.onEndReachedThreshold || 0.1 }
                ListEmptyComponent = {() => <View style = {{
                    transform: [{ scaleY: this.props.inverted ? -1 : 1 }],
                    height: 'auto',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} > 
                <Text style = {{ lineHeight: 80 } } > 没有数据! </Text> 
              </View >
            } >
            </FlatList> 
          </Wrapper>)
          }
        }
        const mapStateToProps = (state) => {
          return {
            help: state.help,
          }
        }
        const mapDispatchToProps = (dispatch) => {
          return bindActionCreators({...GuidActionCreator }, dispatch)
        }

        export default connect(mapStateToProps, mapDispatchToProps)(HelpPage)
        const ScopedStyle = StyleSheet.create({
          listItem: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            paddingLeft: 30,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#dcdcdc',
          },
          garbageClass: {
            fontSize: 16,
            color: Color.f_body
          },
          time: {
            fontSize: 12,
            color: "#dcdcdc"
          },
          leftCon: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column'
          },
          rightCon: {

          },
          score: {
            fontSize: 20,
            color: '#3db0ff',
          },
          head: {
            height: 50,
            backgroundColor: '#3db0ff',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10
          },
          headerIcon: {
            width: 80
          },
          headTitle: {
            paddingLeft: 15,
            flex: 1
          },

        })