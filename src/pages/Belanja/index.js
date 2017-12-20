import React from 'react';
import { Container, Content, Text, Footer } from 'native-base'
import Header from '../../components/Header'
import FooterTab from '../../components/FooterTab'
import Tabs from '../../components/Tab'
import { Routes } from '../../navigator'

export default class BelanjaApp extends React.Component {

  static navigationOptions = (props) => ({
    drawerLockMode: Routes.BelanjaApp.props.drawerLockMode
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header hasTabs searchBar placeholder="Cari di Mentimun" rounded searchBarLeftIcon rightButton
          rightButtonIcon={{
            type: 'MaterialCommunityIcons',
            name: 'cart-outline'
          }}/>
        <Tabs/>
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
