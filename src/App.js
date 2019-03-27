import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Home from './components/Home';
import UserHome from './components/UserHome';
import Editor from './components/Editor';


class App extends Component {
  render() {
    return (
      <>
      {/* <Toolbar />
      <Home /> */}
      <UserHome/>
      </>
    );
  }
}

export default App;
