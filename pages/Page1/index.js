import React from 'react'
import { Container, Content, Text } from 'native-base'
import Header from '../../components/Header'

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Header title='Page 1' {...this.props}/>
        <Content>
          <Text>Page 1</Text>
        </Content>
      </Container>
    )
  }

}
