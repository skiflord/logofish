import React, {Component} from 'react'
import { Card, Feed } from 'semantic-ui-react'

function viewer (Component) {
    return class HOC extends React.Component { 
        render () {
            return (
                <>
                <Component />
                </>
            )
        }
    }
}
 
export default viewer;