import React from 'react';
import { Container, Content, Text, Footer } from 'native-base'
import Header from 'components/Header'
import FooterTab from 'components/FooterTab'
import { Routes } from 'navigator'

export default class AkunApp extends React.Component {

  static navigationOptions = (props) => ({
    drawerLockMode: Routes.AkunApp.props.drawerLockMode
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header searchBar placeholder="Cari di Mentimun" rounded searchBarLeftIcon rightButton
          rightButtonIcon={{
            type: 'MaterialCommunityIcons',
            name: 'cart-outline'
          }}
        />
        <Content>
          <Text>Belanja Page</Text>
        </Content>
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
    );
  }
}
