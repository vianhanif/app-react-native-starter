import React from 'react';
import { Header, Left, Body, Button, Icon, Title } from 'native-base'
import { Routes } from 'navigator'
import { Actions } from 'react-native-router-flux'

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Header>
        <Left style={{flex: 0.2}}>
          <Button transparent
          onPress={() => Actions.drawerOpen() }>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{Routes[Actions.currentScene.replace('_', '')].title}</Title>
        </Body>
      </Header>
    );
  }
}
