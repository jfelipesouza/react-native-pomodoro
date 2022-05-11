import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack'
import { TopTabNavigatorScreens } from './topTabNavigator'

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TopTabNavigatorScreens />
    </NavigationContainer>
  )
}

export default Routes
