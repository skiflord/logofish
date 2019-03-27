import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Home from './components/Home';
import Editor from './components/Editor';
import MainLayout from './components/MainLayout';


class App extends Component {
  render() {
    return (
      <>
      <MainLayout/>
      {/* <Editor/> */}
      </>
    );
  }
}

export default App;
