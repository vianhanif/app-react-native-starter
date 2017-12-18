import React from 'react';
import { Container, Content, Text, Footer } from 'native-base'
import Header from 'components/Header'
import FooterTab from 'components/FooterTab'
import Tabs from 'components/Tab'
import { Routes } from 'navigator'

export default class KategoriApp extends React.Component {

  static navigationOptions = (props) => ({
    drawerLockMode: Routes.KategoriApp.props.drawerLockMode
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
          }}/>
        <Tabs/>
        <Content>
          <Text>Kategori Page</Text>
        </Content>
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
    );
  }
}
