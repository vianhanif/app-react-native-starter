import React from 'react';
import { Image } from 'react-native'
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class Drawer extends React.Component {

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
            dataArray={this.props.routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => Actions[data]()}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
