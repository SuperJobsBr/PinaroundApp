// @flow

// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native'
import { Metrics, Images, Colors } from '../Themes'
import styles from './Styles/MainScreenStyle'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class MainScreen extends React.Component {
  state: {
    currentIndex: number,
  }

  constructor (props: Object) {
    super(props)

    this.state = {
      currentIndex: 1,
    }
  }

  onMomentumScrollEnd(e: Object, swiperState: Object) {
    this.setState({
      currentIndex: swiperState.index,
    })
  }

  navItemStyle(index: number): Array<any> {
    let navItemStyles = [styles.navItem]

    if(this.state.currentIndex === index) {
      let slideNumber = this.state.currentIndex + 1
      let activeNavStyle = styles[`slide${slideNumber}ActiveNav`]

      navItemStyles.push(activeNavStyle)
    }

    return navItemStyles
  }

  jumpToSlide(n: number) {
    // n is the number of places to move the swipe, eg: 2, -1, etc.
    if(n === 0) return

    this.refs.swiper.scrollBy(n)
  }

  jumpToSlideRelative(index: number) {
    let relativeJump = -this.state.currentIndex + index

    this.jumpToSlide(relativeJump)
  }

  renderNav() {
    return (
      <View style={styles.nav}>
        <TouchableHighlight underlayColor={Colors.highlightTint} style={styles.navItemWrapper} onPress={this.jumpToSlideRelative.bind(this, 0)}>
          <Icon style={this.navItemStyle(0)} name="settings" size={Metrics.icons.medium} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor={Colors.highlightTint} style={styles.navItemWrapper} onPress={this.jumpToSlideRelative.bind(this, 1)}>
          <Icon style={this.navItemStyle(1)} name="flash-on" size={Metrics.icons.medium} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor={Colors.highlightTint} style={styles.navItemWrapper} onPress={this.jumpToSlideRelative.bind(this, 2)}>
          <Icon style={this.navItemStyle(2)} name="chat-bubble" size={Metrics.icons.medium} />
        </TouchableHighlight>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {this.renderNav()}
        <Swiper
          ref="swiper"
          loop={false}
          showsPagination={false}
          showsButtons={false}
          index={this.state.currentIndex}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
        >
          <View style={styles.slide1}>
            <View style={styles.slide1NavBackground}></View>
            <View style={styles.content}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
          </View>
          <View style={styles.slide2}>
            <View style={styles.slide2NavBackground}></View>
            <View style={styles.content}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
          </View>
          <View style={styles.slide3}>
            <View style={styles.slide3NavBackground}></View>
            <View style={styles.content}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </View>
        </Swiper>
      </View>
    )
  }
}
