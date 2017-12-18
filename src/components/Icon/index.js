/* @flow */

import React, { Component } from 'react';
import { View, Image } from 'react-native'
import {
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  Zocial,
  SimpleLineIcons
} from '@expo/vector-icons'
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
          return <Entypo style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Entypo>
      case 'EvilIcons':
          return <EvilIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</EvilIcons>
      case 'Feather':
          return <Feather style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Feather>
      case 'FontAwesome':
          return <FontAwesome style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</FontAwesome>
      case 'Foundation':
          return <Foundation style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Foundation>
      case 'Ionicons':
          return <Ionicons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Ionicons>
      case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</MaterialCommunityIcons>
      case 'MaterialIcons':
          return <MaterialIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</MaterialIcons>
      case 'Octicons':
          return <Octicons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Octicons>
      case 'Zocial':
          return <Zocial style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</Zocial>
      case 'SimpleLineIcons':
          return <SimpleLineIcons style={{...getIconStyle(config.baseTheme), ...customStyle}} {...props}>{props.children}</SimpleLineIcons>
      default:
          let imageStyle = getIconStyle(config.baseTheme)
          delete customStyle.color
          delete imageStyle.color
          delete imageStyle.fontSize
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image fadeDuration={0} style={{...imageStyle, ...customStyle}} {...props}>{props.children}</Image>
            </View>
          )
    }
  }
}
