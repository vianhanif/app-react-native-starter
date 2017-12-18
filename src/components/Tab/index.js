/* @flow */

import React, { Component } from 'react';
import { TabRoutes } from 'navigator'
import { Actions } from 'navigation-router'
import GeneralIcon from 'components/Icon'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TabsApp extends Component {

  isActive(tabRoute) {
    return `_${tabRoute}` === Actions.currentScene
  }

  render() {
    return (
      <View style={styles.container}>
        {Object.keys(TabRoutes).map((tabRoute, index) => {
          if (TabRoutes[tabRoute].showTab) {
            return (
              <TouchableOpacity key={index} style={styles.button} onPress={() => TabRoutes[tabRoute].handler() }>
                <View>
                  <GeneralIcon
                    customStyle={this.isActive(tabRoute) ? styles.active : styles.base}
                    {...{...TabRoutes[tabRoute].icon, source: (this.isActive(tabRoute) ? TabRoutes[tabRoute].icon.activated : TabRoutes[tabRoute].icon.source)}}
                  />
                  <Text style={this.isActive(tabRoute) ? styles.active : styles.base}>{TabRoutes[tabRoute].title}</Text>
                </View>
              </TouchableOpacity>
            )
          } else {
            return null
          }
        })}
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .1
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  base: {
    opacity: .8,
    fontSize: 13,
    marginTop: 2
  },
  active: {
    color: '#00c853',
    fontSize: 13,
    marginTop: 2,
    opacity: 1.0,
    fontWeight: 'bold'
  }
}
