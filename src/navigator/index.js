import React from 'react'
import DefaultDrawer from 'components/Drawer'
import { Router, Scene, Drawer, Stack } from 'navigation-router'

export const TabRoutes = require('./tabRoutes').default

export const Routes = require('./routes').default

export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Stack key="root">
          <Drawer type="replace" hideNavBar drawerPosition="left" contentComponent={() => <DefaultDrawer/> }>
            {Object.keys(Routes).map((key, index) => <Scene type="replace" hideNavBar key={key} component={Routes[key].screen}/> )}
          </Drawer>
        </Stack>
      </Router>
    )
  }

}
