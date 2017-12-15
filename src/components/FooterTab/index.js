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
      <FooterTab style={styles.container}>
        {Object.keys(Routes).map((routeName, index) => {
          return (
            <Button active={this.isActive(routeName)} key={index} onPress={() => Actions[routeName]()}>
              <Icon
                customStyle={this.isActive(routeName) ? styles.active : styles.base }
                {...{...Routes[routeName].icon, source: (this.isActive(routeName) ? Routes[routeName].icon.activated : Routes[routeName].icon.source)}}
              />
            <Text style={{...styles.button, ...(this.isActive(routeName) ? styles.active : styles.base)}}>{Routes[routeName].title}</Text>
            </Button>
          )
        })}
      </FooterTab>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white'
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    color: '#424242',
    marginTop: 1,
    fontSize: 12
  },
  base: {
    opacity: .8,
  },
  active: {
    color: '#00c853',
    fontSize: 13,
    marginTop: 2,
    opacity: 1.0,
  }
}
