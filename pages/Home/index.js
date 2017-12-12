import React from 'react';
import { Container, Content, Button, Text } from 'native-base'
import Header from 'components/Header'
import * as Actions from 'actions'

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
        <Header title='Home Page' {...this.props}/>
        <Content padder>
          <Button
            onPress={() => this.handleActionSheet()}>
            <Text>Actionsheet {this.state.action}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
