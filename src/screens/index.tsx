import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { Context } from '../context'
import { dark, light } from '../theme'
import Routes from './routes'

const Screens: React.FC = () => {
  const { isDark } = useContext(Context)
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    setTheme(isDark ? dark : light)
  }, [isDark])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Routes />
    </ThemeProvider>
  )
}

export default Screens
