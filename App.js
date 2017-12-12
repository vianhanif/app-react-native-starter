import React from 'react';
import { Root, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { DrawerNavigator } from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import MainPage from './pages/App'

const AppNavigator = DrawerNavigator({
  MainPage: { screen: MainPage }
})

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}


export default class App extends React.Component {

  state = {
    isReady: false
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([]);

    const fontAssets = cacheFonts([
      {
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        <StyleProvider style={getTheme(material)}>
          <Root>
            <AppNavigator/>
          </Root>
        </StyleProvider>
      );
    }
  }
}
