import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <>
      <Toolbar />
      <Home />
      </>
    );
  }
}

export default App;
