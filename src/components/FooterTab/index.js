/* @flow */

import React, { Component } from 'react';
import { FooterTab, Button, Text } from 'native-base'
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
      <FooterTab>
        {Object.keys(Routes).map((routeName, index) => {
          return (
            <Button active={this.isActive(routeName)} key={index} onPress={() => Actions[routeName]()}>
              <Icon
                customStyle={this.isActive(routeName) ? styles.active : styles.base }
                {...Routes[routeName].icon}
              />
              <Text>{routeName}</Text>
            </Button>
          )
        })}
      </FooterTab>
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
