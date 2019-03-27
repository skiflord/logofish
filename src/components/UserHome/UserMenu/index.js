import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import  './menu.css'

const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']
const namesB = ['files', 'message', 'editor', 'settings']

export default class MenuExampleColoredInverted extends Component {
  state = { activeB: colorsB[0] }

  handleBClick = (e, { name }) => this.setState({ activeB: name })

  render() {
    const { activeB } = this.state

    return (
      <div className='headerMenu'>
        <Menu inverted className='Menu'>
          {namesB.map(c => (
            <Menu.Item
              key={c}
              name={c}
              active={activeB === c}
              color={colorsB[namesB.indexOf(c)]}
              onClick={this.handleBClick}
            />
          ))}
        </Menu>
      </div>
    )
  }
}