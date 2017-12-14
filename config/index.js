import assetLoader from './assets'
import baseTheme from 'native-base-theme/variables/material'

const config = {
  baseTheme,
  Asset: {
    Fonts: [
      {
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      }
    ],
    Images: []
  }
}

export default {
  ...config,
  assetLoader () {
    return assetLoader(config.Asset)
  }
}
