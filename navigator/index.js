import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Drawer from '../components/Drawer'
import { RouteNames, Routes } from '../pages'

export default App = DrawerNavigator(
  Routes,
  {
    contentComponent (props) {
      return <Drawer {...props} routes={RouteNames}/>
    }
  }
)
