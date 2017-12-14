/* @flow */

import React, { Component } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import config from 'config'
import getIconStyle from 'native-base-theme/components/Icon'

export default class GeneralIcon extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let type = this.props.type
    let customStyle = this.props.customStyle
    let props = this.props
    switch(type) {
      case 'Entypo': 
          return <Entypo style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Entypo>
      case 'EvilIcons':
          return <EvilIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</EvilIcons>
      case 'Feather':
          return <Feather style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Feather>
      case 'FontAwesome':
          return <FontAwesome style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</FontAwesome>
      case 'Foundation':
          return <Foundation style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Foundation>
      case 'Ionicons':
          return <Ionicons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Ionicons>
      case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</MaterialCommunityIcons>
      case 'MaterialIcons':
          return <MaterialIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</MaterialIcons>
      case 'Octicons':
          return <Octicons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Octicons>
      case 'Zocial':
          return <Zocial style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</Zocial>
      case 'SimpleLineIcons':
          return <SimpleLineIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{this.props.children}</SimpleLineIcons>
      default:
          return <SimpleLineIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}/>
    }
  }
}
