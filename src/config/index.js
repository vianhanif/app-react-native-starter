import assetLoader from './assets'
import baseTheme from 'native-base-theme/variables/material'

const config = {
  baseTheme,
  Asset: {
    Fonts: [
      {
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Entypo': require('@expo/vector-icons/fonts/Entypo.ttf'),
        'EvilIcons': require('@expo/vector-icons/fonts/EvilIcons.ttf'),
        'Feather': require('@expo/vector-icons/fonts/Feather.ttf'),
        'FontAwesome': require('@expo/vector-icons/fonts/FontAwesome.ttf'),
        'Foundation': require('@expo/vector-icons/fonts/Foundation.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        'MaterialCommunityIcons': require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'),
        'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
        'Octicons': require('@expo/vector-icons/fonts/Octicons.ttf'),
        'Zocial': require('@expo/vector-icons/fonts/Zocial.ttf'),
        'SimpleLineIcons': require('@expo/vector-icons/fonts/SimpleLineIcons.ttf')
      }
    ],
    Images: [
      require('assets/icons/icon_agen.png'),
      require('assets/icons/icon_agen_green.png'),
      require('assets/icons/icon_home.png'),
      require('assets/icons/icon_home_green.png'),
      require('assets/icons/icon_pesanan.png'),
      require('assets/icons/icon_pesanan_green.png'),
      require('assets/icons/icon_profil.png'),
      require('assets/icons/icon_profil_green.png'),
      require('assets/icons/icon_voucher.png'),
      require('assets/icons/icon_voucher_green.png'),
      require('assets/icons/belanja.png'),
      require('assets/icons/belanja_inactive.png'),
      require('assets/icons/kategori.png'),
      require('assets/icons/kategori_aktif.png'),
      require('assets/icons/m_pay_icon.png'),
      require('assets/icons/ngobrol_icon.png')
    ]
  }
}

export default {
  ...config,
  assetLoader () {
    return assetLoader(config.Asset)
  }
}
