import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

import SelectPhoto from '../screens/Photo/SelectPhoto'
import TakePhoto from '../screens/Photo/TakePhoto'
import UploadPhoto from '../screens/Photo/UploadPhoto'

const PhotoTabs = () => {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
      <Tab.Screen name="TakePhoto" component={TakePhoto} />
    </Tab.Navigator>
  )
}

const PhotoNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PhotoTabs" component={PhotoTabs} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    </Stack.Navigator>
  )
}

export default PhotoNavigation