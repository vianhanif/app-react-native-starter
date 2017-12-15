import React from 'react'
import { Container, Content, Text, Footer } from 'native-base'
import Header from 'components/Header'
import FooterTab from 'components/FooterTab'

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Header drawer/>
        <Content>
          <Text>Page 1</Text>
        </Content>
        <Footer>
          <FooterTab/>
        </Footer>
      </Container>
    )
  }

}
