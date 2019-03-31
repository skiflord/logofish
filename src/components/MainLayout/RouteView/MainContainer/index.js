import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ParallaxHeader from './ParallaxHeader'
import FilesSegment from './FilesSegment'

const MainContainer = () => (
  <div>
    <ParallaxHeader/>
    {/* <Switch>
      <Route path='/files' component={FilesSegment}/>
    </Switch> */}
  </div>
)
export default MainContainer