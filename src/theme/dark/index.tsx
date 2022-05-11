import { Dimensions, StatusBar } from 'react-native'
import { RFPercentage as Perct } from 'react-native-responsive-fontsize'

const { height, width } = Dimensions.get('window')
let statusbarHeight = StatusBar.currentHeight

if (typeof statusbarHeight === 'undefined') {
  statusbarHeight = 0
}

export const dark = {
  colors: {
    red: '#FF2442',
    gray: '#C4C4C4',
    blue: '#3DB2FF',
    yellow: '#FFB830',
    text: '#fafafa',
    background: '#222'
  },
  dimensions: {
    height,
    width,
    statusbarHeight
  },
  fontSize: {
    xs: `${Perct(0.5)}px`,
    s: `${Perct(1)}px`,
    md: `${Perct(1.5)}px`,
    lg: `${Perct(1.75)}px`,
    xlg: `${Perct(3)}px`,
    xxlg: `${Perct(5)}px`,
    xxxlg: `${Perct(8)}px`
  },
  fontFamily: {
    bold: '',
    normal: '',
    light: ''
  },
  border: {
    xs: `${Perct(0.5)}px`,
    s: `${Perct(1)}px`,
    md: `${Perct(1.5)}px`,
    lg: `${Perct(1.75)}px`,
    xlg: `${Perct(2)}px`,
    xxlg: `${Perct(3)}px`,
    xxxlg: `${Perct(4.5)}px`
  },
  space: {
    xs: `${Perct(0.5)}px`,
    s: `${Perct(1)}px`,
    md: `${Perct(1.5)}px`,
    lg: `${Perct(1.75)}px`,
    xlg: `${Perct(2)}px`
  },
  icons: {
    xs: Perct(0.5),
    s: Perct(1),
    md: Perct(1.5),
    lg: Perct(2),
    xlg: Perct(2.5),
    xxlg: Perct(4),
    xxxlg: Perct(8)
  }
}
