import React from 'react';
import { Root, StyleProvider } from 'native-base'
import getTheme from 'native-base-theme/components'
import material from 'native-base-theme/variables/material'
import Navigator from 'navigator'
import { AppLoading } from 'expo'
import config from 'config'

export default class App extends React.Component {

  state = {
    isReady: false
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={config.assetLoader}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        <StyleProvider style={getTheme(material)}>
          <Root>
            <Navigator/>
          </Root>
        </StyleProvider>
      );
    }
  }
}
