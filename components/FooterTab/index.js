/* @flow */

import React, { Component } from 'react';
import { FooterTab, Footer, Button, Icon, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { Routes } from 'navigator'
import styles from './style'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Footer style={styles.container}>
        <FooterTab>
          <Button onPress={() => Actions.drawerOpen()}>
            <Icon name="menu" />
            <Text>Menu</Text>
          </Button>
          {Object.keys(Routes).map((routeName, index) => {
            return (
              <Button active={`_${routeName}` === Actions.currentScene} key={index} onPress={() => Actions[routeName]()}>
                <Icon name={Routes[routeName].icon} />
                <Text>{routeName}</Text>
              </Button>
            )
          })}
        </FooterTab>
      </Footer>
    );
  }
}
