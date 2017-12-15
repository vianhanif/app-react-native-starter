import React from 'react';
import { Container, Content, Button, Text, Footer } from 'native-base'
import Header from 'components/Header'
import FooterTab from 'components/FooterTab'
import * as Actions from 'actions'
import { Routes } from 'navigator'

export default class HomeApp extends React.Component {

  static navigationOptions = (props) => ({
    drawerLockMode: Routes.Home.props.drawerLockMode
  })

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
        <Header searchBar searchBarRightIcon rightButton rounded/>
        <Content padder>
          <Button
            onPress={() => this.handleActionSheet()}>
            <Text>Actionsheet {this.state.action}</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
    );
  }
}
