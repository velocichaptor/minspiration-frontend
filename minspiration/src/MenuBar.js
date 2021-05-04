import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name='feed'
          active={activeItem === 'feed'}
          onClick={this.handleItemClick}
        >
          Feed
        </Menu.Item>

        <Menu.Item
          name='liked'
          active={activeItem === 'liked'}
          onClick={this.handleItemClick}
        >
          Liked
        </Menu.Item>
      </Menu>
    )
  }
}