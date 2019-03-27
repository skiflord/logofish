import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MainContainer from './MainContainer'
import Editor from '../../Editor'

const RouteView = () => {
    return (
      <>
        <main>
          <Switch>
            <Route path='/home/:option' component={MainContainer}/>
            <Route path='/editor' component={Editor}/>
          </Switch>
        </main>
      </>
    )
}

export default RouteView