import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import logo from '../../img/logo.PNG'
import background from '../../img/marlintuna.png'

const Home = () => (
  <div>
    <Image src={background} fluid size='massive' centered/>
    <Segment inverted vertical style={{margin:'1em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='React' />
            
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Firebase' />
           
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Redux' />
           
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Create by Sanchez' />
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='small' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Home