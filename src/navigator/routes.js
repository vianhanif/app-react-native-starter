import BelanjaApp from '../pages/Belanja'
import PesananApp from '../pages/Pesanan'
import AkunApp from '../pages/Akun'
import VoucherApp from '../pages/Voucher'
import KategoriApp from '../pages/Kategori'
import { Actions } from 'react-native-router-flux'

const style = {
  icon: {
    overflow: 'visible',
    width: 24,
    height: 24
  }
}

export default {
  BelanjaApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    showFooter: true,
    icon: {
      type: 'Image',
      source: require('../assets/icons/icon_home.png'),
      activated: require('../assets/icons/icon_home_green.png'),
      customStyle: style.icon
    },
    title: 'Belanja',
    screen: BelanjaApp,
    handler() {
      Actions.BelanjaApp()
    }
  },
  KategoriApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    showFooter: false,
    icon: {
      type: 'Image',
      source: require('../assets/icons/kategori.png'),
      activated: require('../assets/icons/kategori_aktif.png'),
      customStyle: style.icon
    },
    title: 'Kategori',
    screen: KategoriApp,
    handler() {
      Actions.KategoriApp()
    }
  },
  PesananApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    showFooter: true,
    icon: {
      type: 'Image',
      source: require('../assets/icons/icon_pesanan.png'),
      activated: require('../assets/icons/icon_pesanan_green.png'),
      customStyle: style.icon
    },
    title: 'Pesanan',
    screen: PesananApp,
    handler() {
      Actions.PesananApp()
    }
  },
  AkunApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    showFooter: true,
    icon: {
      type: 'Image',
      source: require('../assets/icons/icon_profil.png'),
      activated: require('../assets/icons/icon_profil_green.png'),
      customStyle: style.icon
    },
    title: 'Akun',
    screen: AkunApp,
    handler() {
      Actions.AkunApp()
    }
  },
  VoucherApp: {
    props: {
      drawerLockMode: 'locked-closed'
    },
    showFooter: true,
    icon: {
      type: 'Image',
      source: require('../assets/icons/icon_voucher.png'),
      activated: require('../assets/icons/icon_voucher_green.png'),
      customStyle: style.icon
    },
    title: 'Voucher',
    screen: VoucherApp,
    handler() {
      Actions.VoucherApp()
    }
  },
}
