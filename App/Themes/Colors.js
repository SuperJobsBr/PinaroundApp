// @flow

import Color from 'color'

let colors = {
  clear: 'rgba(0,0,0,0)',
  facebook: '#3b5998',
  transparent: 'rgba(0,0,0,0)',
  silver: '#F7F7F7',
  steel: '#CCCCCC',
  error: 'rgba(200, 0, 0, 0.8)',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  highlightTint: 'rgba(0, 0, 0, 0.2)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#e73536',
  blue: '#6ba0df',
  pink: '#fe4967',
  yellow: '#ffd977',
  drawer: 'rgba(30, 30, 29, 0.95)',
}

// Colors applications
colors = {
  ...colors,
  background: colors.pink,
  pulse: colors.blue,
  mainScreen: {
    matches: {
      bg: colors.snow,
      nav: colors.pink,
      activeNav: colors.yellow,
    },
    settings: {
      bg: Color(colors.yellow).lighten(0.3).rgbString(),
      nav: colors.yellow,
      activeNav: colors.snow,
    },
    chat: {
      bg: Color(colors.blue).lighten(0.3).rgbString(),
      nav: colors.blue,
      activeNav: colors.snow,
    },
  }
}

export default colors
