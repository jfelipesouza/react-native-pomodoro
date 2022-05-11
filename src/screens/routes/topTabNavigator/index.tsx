import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../../home'
import LongPause from '../../longPause'
import SmallPause from '../../smallPause'
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createMaterialTopTabNavigator()

export const TopTabNavigatorScreens: React.FC = () => {
  const { colors, dimensions, icons } = useTheme()

  const TopBarRoutes = [
    {
      name: 'long-pause',
      component: LongPause,
      title: 'Pausa Longa',
      activeColor: colors.blue
    },
    {
      name: 'pomodoro',
      component: Home,
      title: 'Pomodoro',
      activeColor: colors.red
    },
    {
      name: 'small-pause',
      component: SmallPause,
      title: 'Pausa Curta',
      activeColor: colors.yellow
    }
  ]

  return (
    <Navigator initialRouteName="pomodoro">
      {TopBarRoutes.map(item => (
        <Screen
          name={item.name}
          component={item.component}
          options={{
            title: item.title,
            tabBarLabelStyle: {
              textTransform: 'capitalize',
              fontSize: icons.xlg
            },
            tabBarInactiveTintColor: colors.background,
            tabBarActiveTintColor: colors.text,
            tabBarItemStyle: {
              backgroundColor: item.activeColor
            },
            tabBarStyle: {
              paddingTop: dimensions.statusbarHeight,
              backgroundColor: item.activeColor
            },
            tabBarPressColor: item.activeColor
          }}
          key={item.name + item.title}
        />
      ))}
    </Navigator>
  )
}
