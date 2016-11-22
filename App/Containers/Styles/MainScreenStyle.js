// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
  },
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: Metrics.mainScreen.navBarHeight,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navItemWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Metrics.mainScreen.navBarPadding,
    alignItems: 'center',
  },
  navItem: {
    color: Colors.windowTint,
  },
  content: {
    paddingTop: Metrics.mainScreen.navBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    backgroundColor: Colors.mainScreen.settings.bg,
  },
  slide1NavBackground: {
    height: Metrics.mainScreen.navBarHeight,
    alignSelf: 'stretch',
    backgroundColor: Colors.mainScreen.settings.nav,
  },
  slide1ActiveNav: {
    color: Colors.mainScreen.settings.activeNav,
  },
  slide2: {
    flex: 1,
    backgroundColor: Colors.mainScreen.matches.bg,
  },
  slide2NavBackground: {
    height: Metrics.mainScreen.navBarHeight,
    alignSelf: 'stretch',
    backgroundColor: Colors.mainScreen.matches.nav,
  },
  slide2ActiveNav: {
    color: Colors.mainScreen.matches.activeNav,
  },
  slide3: {
    flex: 1,
    backgroundColor: Colors.mainScreen.chat.bg,
  },
  slide3NavBackground: {
    height: Metrics.mainScreen.navBarHeight,
    alignSelf: 'stretch',
    backgroundColor: Colors.mainScreen.chat.nav,
  },
  slide3ActiveNav: {
    color: Colors.mainScreen.chat.activeNav,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
