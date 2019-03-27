import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import UserMenu from './UserMenu'
import HeaderParallax from './UserHeader'
import FileList from './HOC/filelist'
import viewer from './HOC'
const UserFiles = viewer(FileList)

export default class UserHome extends Component {
  render() {
    return (
      <>
      <UserMenu /> 
      <HeaderParallax/>
      <Grid>
        <Grid.Column width={9}>
          <Segment style={{margin: '1em 1em 0em'}}>
            <UserFiles/> 
          </Segment>
        </Grid.Column>
        <Grid.Column width={3} >  
          <FileList />   
        </Grid.Column>
      </Grid>
      </>
    )
  }
}