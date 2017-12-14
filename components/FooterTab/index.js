/* @flow */

import React, { Component } from 'react';
import { FooterTab, Footer, Button, Text } from 'native-base'
import Icon from 'components/Icon'
import { Actions } from 'react-native-router-flux'
import { Routes } from 'navigator'

export default class BottomTab extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  isActive(routeName) {
    return `_${routeName}` === Actions.currentScene
  }

  render() {
    return (
      <Footer style={styles.container}>
        <FooterTab>
          {Object.keys(Routes).map((routeName, index) => {
            return (
              <Button active={this.isActive(routeName)} key={index} onPress={() => Actions[routeName]()}>
                <Icon
                  customStyle={this.isActive(routeName) ? styles.active : styles.base }
                  type={Routes[routeName].icon.type}
                  name={Routes[routeName].icon.name}
                />
                <Text>{routeName}</Text>
              </Button>
            )
          })}
        </FooterTab>
      </Footer>
    );
  }
}

const styles = {
  base: {
    color: 'white',
    opacity: .8
  },
  active: {
    color: 'white',
    opacity: 1.0
  }
}
