import React from 'react';
import { Header, Left, Body, Button, Title, Icon, Input, Item } from 'native-base'
import { Routes } from 'navigator'
import { Actions } from 'navigation-router'
import GeneralIcon from 'components/Icon'

export default class HeaderApp extends React.Component {

  constructor (props) {
    super(props)
  }

  renderAsSearchBar() {
    return this.props.searchBar || this.props.searchBarLeftIcon || this.props.searchBarRightIcon || this.props.searchBarBothIcon
  }

  shouldRenderSearchBar() {
    if (this.renderAsSearchBar()) {
      return (
        <Item style={styles.input.container}>
          {(() => {
            if (this.props.searchBarLeftIcon || this.props.searchBarBothIcon) {
              return (
                <GeneralIcon customStyle={styles.barIcon} {...this.props.searchLeftIcon} />
              )
            }
          })()}
          <Input placeholder={this.props.placeholder} placeholderTextColor={styles.placeholderColor} style={styles.input.text} />
            {(() => {
              if (this.props.searchBarRightIcon || this.props.searchBarBothIcon) {
                return (
                  <GeneralIcon customStyle={styles.barIcon} {...this.props.searchRightIcon} />
                )
              }
            })()}
        </Item>
      )
    }
    return null
  }

  shouldRenderSearchBarRightButton() {
    if (this.props.rightButton) {
      return (
        <Button transparent>
          <GeneralIcon customStyle={styles.barButton} {...this.props.rightButtonIcon} />
        </Button>
      )
    }
    return null
  }

  shouldRenderDrawerButton() {
    if (this.props.drawer || this.props.backButton) {
      return (
        <Left style={{flex: 0.2}}>
          <Button transparent
          onPress={() => this.props.drawer ? Actions.drawerOpen() : Actions.goBack() }>
            <Icon type="MaterialIcons" name={this.props.drawer ? 'menu' : 'arrow-back'} />
          </Button>
        </Left>
      )
    }
    return null
  }

  shouldRenderTitle() {
    if (!this.renderAsSearchBar()) {
      return (
        <Body>
          <Title>{this.props.title ? this.props.title : (Routes[Actions.currentScene.replace('_', '')].title)}</Title>
        </Body>
      )
    }
    return null
  }

  render() {
    return (
      <Header style={styles.container} {...this.props}>
        {this.shouldRenderSearchBar()}
        {this.shouldRenderSearchBarRightButton()}
        {this.shouldRenderDrawerButton()}
        {this.shouldRenderTitle()}
      </Header>
    );
  }
}

HeaderApp.defaultProps = {
  placeholder: 'Search',
  searchLeftIcon: {
    type: 'MaterialIcons',
    name: 'search'
  },
  searchRightIcon: {
    type: 'Entypo',
    name: 'edit'
  },
  rightButtonIcon: {
    type: 'FontAwesome',
    name: 'search'
  }
}

const styles = {
  container: {
    backgroundColor: '#00c853',
    borderBottomWidth: 0,
    elevation: 0
  },
  placeholderColor: '#bdbdbd',
  input: {
    container: {
      marginRight: 10
    },
    text: {
      fontSize: 13,
      color: '#424242'
    }
  },
  barIcon: {
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 8,
    color: '#bdbdbd'
  },
  barButton: {
    fontSize: 24,
    color: 'white',
    marginRight: 10
  }
}
