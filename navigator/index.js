import React from 'react'
import DefaultDrawer from 'components/Drawer'
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux'
import BelanjaApp from 'pages/Belanja'
import PesananApp from 'pages/Pesanan'
import AkunApp from 'pages/Akun'
import VoucherApp from 'pages/Voucher'

export const Routes = {
  BelanjaApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    icon: {
      type: 'Image',
      source: require('assets/icons/icon_home.png'),
      activated: require('assets/icons/icon_home_green.png'),
      customStyle: {
        overflow: 'visible',
        width: 24,
        height: 24
      }
    },
    title: 'Belanja',
    screen: BelanjaApp
  },
  PesananApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    icon: {
      type: 'Image',
      source: require('assets/icons/icon_pesanan.png'),
      activated: require('assets/icons/icon_pesanan_green.png'),
      customStyle: {
        overflow: 'visible',
        width: 24,
        height: 24
      }
    },
    title: 'Pesanan',
    screen: PesananApp
  },
  AkunApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    icon: {
      type: 'Image',
      source: require('assets/icons/icon_profil.png'),
      activated: require('assets/icons/icon_profil_green.png'),
      customStyle: {
        overflow: 'visible',
        width: 24,
        height: 24
      }
    },
    title: 'Akun',
    screen: AkunApp
  },
  VoucherApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    icon: {
      type: 'Image',
      source: require('assets/icons/icon_voucher.png'),
      activated: require('assets/icons/icon_voucher_green.png'),
      customStyle: {
        overflow: 'visible',
        width: 24,
        height: 24
      }
    },
    title: 'Voucher',
    screen: VoucherApp
  },
}

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
