import React, { Component } from 'react';

import './App.css';

import WindowSizeHandler from './components/WindowSizeHandler';
import WindowScrollHandler from './components/WindowScrollHandler';


class App extends Component {
  render() {
    return (
      <div className="App">
        <WindowSizeHandler />
        <WindowScrollHandler />
      </div>
    );
  }
}

export default App;
