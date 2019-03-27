import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import  './index.css'

const colors = ['red', 'violet', 'purple', 'pink', 'brown', 'grey']
const names = ['files', 'message', 'editor', 'settings']
const links = ['files', 'message', 'editor', 'settings']

export default class HeaderMenu extends Component {
  state = { active: names[0] }

  handleBClick = (e, { name }) => this.setState({ active: name })

  render() {
    const { active } = this.state

    return (
      <div className='headerMenu'>
        <Menu inverted className='Menu'>
          {names.map(c => (
            <Menu.Item
              key={c}
              name={c}
              active={active === c}
              color={colors[names.indexOf(c)]}
              onClick={this.handleBClick}
              to={links[names.indexOf(c)]}
            />
          ))}
        </Menu>
      </div>
    )
  }
}