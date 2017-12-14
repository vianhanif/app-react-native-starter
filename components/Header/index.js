import React from 'react';
import { Header, Left, Body, Button, Title, Icon, Input, Item } from 'native-base'
import { Routes } from 'navigator'
import { Actions } from 'react-native-router-flux'
import GeneralIcon from 'components/Icon'

export default class HeaderApp extends React.Component {

  constructor (props) {
    super(props)
  }

  renderAsSearchBar() {
    return this.props.searchBar || this.props.searchBarleftIcon || this.props.searchBarRightIcon || this.props.searchBarBothIcon
  }

  shouldRenderSearchBar() {
    if (this.renderAsSearchBar()) {
      return (
        <Item>
          {(() => {
            if (this.props.searchBarleftIcon || this.props.searchBarBothIcon) {
              return (
                <GeneralIcon customStyle={styles.barIcon} type={this.props.searchLeftIcon.type} name={this.props.searchLeftIcon.name} />
              )
            }
          })()}
          <Input placeholder={this.props.placeholder} />
            {(() => {
              if (this.props.searchBarRightIcon || this.props.searchBarBothIcon) {
                return (
                  <GeneralIcon customStyle={styles.barIcon} type={this.props.searchRightIcon.type} name={this.props.searchRightIcon.name} />
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
          <GeneralIcon customStyle={styles.barButton} type={this.props.rightButtonIcon.type} name={this.props.rightButtonIcon.name} />
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
      <Header {...this.props}>
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
  barIcon: {
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 8
  },
  barButton: {
    fontSize: 20,
    color: 'white'
  }
}
