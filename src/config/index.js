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
      require('assets/icons/akun.png')
    ]
  }
}

export default {
  ...config,
  assetLoader () {
    return assetLoader(config.Asset)
  }
}
