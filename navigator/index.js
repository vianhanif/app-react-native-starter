import React from 'react'
import DefaultDrawer from 'components/Drawer'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import Home from 'pages/Home'
import Page1 from 'pages/Page1'

const Routes = {
  'Home Page': { screen: Home },
  'Page 1': { screen: Page1 }
}

export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Drawer contentComponent={() => <DefaultDrawer routes={Object.keys(Routes)}/> }>
          {Object.keys(Routes).map((key, index) => <Scene hideNavBar key={key} component={Routes[key].screen}/> )}
        </Drawer>
      </Router>
    )
  }

}
