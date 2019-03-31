import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import  './index.css'

const colors = ['red', 'violet', 'purple', 'pink', 'brown', 'grey']
const names = ['files', 'message', 'editor', 'settings']

export default class HeaderMenu extends Component {
  state = { active: names[0] }

  handleBClick = (e, { name }) => {
    this.setState({ active: name })
  }

  render() {
    const { active } = this.state

    return (
      <div className='headerMenu'>
        <Menu inverted className='Menu'>
          {names.map(c => (
            <Link to={names[names.indexOf(c)]}>
              <Menu.Item
                key={c}
                name={c}
                active={active === c}
                color={colors[names.indexOf(c)]}
                onClick={this.handleBClick}
              />
            </Link> 
          ))}
        </Menu>
      </div>
    )
  }
}
