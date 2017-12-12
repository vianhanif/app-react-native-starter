import React from 'react';
import { Container, Content, Header, Left, Body, Button, Icon, Title, Text } from 'native-base'
import * as Actions from '../actions'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      action: 'empty'
    }
  }

  handleActionSheet() {
    let self = this
    Actions.Common.ActionSheet.show({
      title: 'Test ActionSheet',
      action(options, index) {
        self.setState({ action: options[index].value })
        Actions.Common.Toast.show({
          text: 'Test Toast',
          position: 'bottom',
          btnText: 'Yes, Okay',
          onPress () {
            console.log('pressed')
          }
        })
      }
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content padder>
          <Button
            onPress={() => this.handleActionSheet()}>
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
