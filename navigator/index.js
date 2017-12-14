import React from 'react'
import DefaultDrawer from 'components/Drawer'
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux'
import Home from 'pages/Home'
import Page1 from 'pages/Page1'

export const Routes = {
  'Home': {
    icon: 'home',
    title: 'Home Page',
    screen: Home
  },
  'About': {
    icon: 'person',
    title: 'About Page',
    screen: Page1
  }
}

export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Stack>
          <Drawer hideNavBar drawerPosition="left" contentComponent={() => <DefaultDrawer/> }>
            {Object.keys(Routes).map((key, index) => <Scene hideNavBar key={key} component={Routes[key].screen}/> )}
          </Drawer>
        </Stack>
      </Router>
    )
  }

}
