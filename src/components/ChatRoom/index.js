import React from 'react'
import { Card, Form, TextArea, List, Image, Divider, Button } from 'semantic-ui-react'
import './index.css'

const ChatRoom = () => (
    <div className='chatRoom'>
    <Card raised style={{margin: '1em 1em 0em'}}>
    <Card.Content>
      <Card.Header style={{marginTop: '5px'}}>Chat Room</Card.Header>
    </Card.Content>
    <Divider fitted />
    <div>
    <List>
    <List.Item>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/matthew.png' />
      <List.Content>
        <List.Header as='a'>Matthew</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/jenny.jpg' />
      <List.Content>
        <List.Header as='a'>Jenny Hess</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Twin Peaks</b>
          </a>{' '}
          3 days ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/veronika.jpg' />
      <List.Content>
        <List.Header as='a'>Veronika Ossi</List.Header>
        <List.Description>Has not watched </List.Description>
      </List.Content>
    </List.Item>
  </List>
  </div>
  <div>
  <Divider />
  <Form style={{margin: '2px'}}>
    <TextArea rows={1} placeholder='Tell us more' />
    {/* <Button primary style={{marginTop: '2px'}}>Send</Button> */}
  </Form>
  </div>
  </Card>
  </div>
)

export default ChatRoom