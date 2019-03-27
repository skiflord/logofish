import React from 'react'
import HeaderMenu from './Menu'
import RouteView from './RouteView'

export default class MainLayout extends React.Component {
  render () {
    return(
      <>
        <HeaderMenu/>
        <RouteView/>
      </>    
    )
  }
}