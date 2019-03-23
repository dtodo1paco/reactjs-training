import React, { Component } from 'react';
import './App.css';

import BasicRouter from './containers/BasicRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicRouter />
      </div>
    );
  }
}

export default App;
