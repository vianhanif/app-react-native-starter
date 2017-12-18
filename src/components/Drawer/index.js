import React from 'react';
import { Image } from 'react-native'
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Actions } from 'navigation-router'
import { Routes } from 'navigator'

export default class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: 'https://www.w3schools.com/w3css/img_fjords.jpg'
            }}
            style={{
              height: 200,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
          </Image>
          <List
            dataArray={Object.keys(Routes)}
            renderRow={routeName => {
              return (
                <ListItem
                  button
                  onPress={() => Actions[routeName]()}>
                  <Text>{Routes[routeName].title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
