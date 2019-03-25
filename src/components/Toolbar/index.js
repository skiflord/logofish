import React, {Component} from 'react'
import {
  Menu,
  Container,
  Image
} from 'semantic-ui-react'
import logo from '../../img/logo.PNG'

export default class Toolbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <Menu  pointing secondary>
      <Container>
        <Menu.Item>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }}/>
          logofish
        </Menu.Item>
        <Menu.Menu position ='right'>
          <Menu.Item 
          className='item' 
          as='a'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}>Log in</Menu.Item>
          <Menu.Item 
          className='item' 
          as='a'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}>Sign up</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
    )
  }
}

