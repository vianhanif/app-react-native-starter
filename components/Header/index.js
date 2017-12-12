import React from 'react';
import { Header, Left, Body, Button, Icon, Title } from 'native-base'

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <Header>
        <Left style={{flex: 0.2}}>
          <Button transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
