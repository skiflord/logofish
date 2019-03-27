import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ParallaxHeader from './ParallaxHeader'
import FilesSegment from './FilesSegment'

export default class MainContainer {
  render () {
    return (
      <>
        <ParallaxHeader/>
        <Switch>
          <Route path='/files' component={FilesSegment}/>
        </Switch>
      </>
    )
  }
}