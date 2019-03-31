import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MainContainer from './MainContainer'
import Editor from '../../Editor'

const RouteView = () => (
        <div>
          <Switch>
            <Route exact path='/editor' component={Editor}/>
            <Route path='/:option' component={MainContainer}/>
          </Switch>
        </div>
)

export default RouteView