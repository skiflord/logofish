import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2' 

import './index.css'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => (
  <div className='editorWindow'>
    <Menu attached='top'>
      <Dropdown item icon='wrench' simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='dropdown' />
            <span className='text'>New</span>

            <Dropdown.Menu>
              <Dropdown.Item>Document</Dropdown.Item>
              <Dropdown.Item>Image</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input className='prompt' type='text' placeholder='Search animals...' />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>

    <Segment 
      attached='bottom' 
      className='editorSegmentField'
      style={{padding: '0%'}}>
      <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
      />
    </Segment>
  </div>
)

export default MenuExampleAttached