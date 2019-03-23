import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainApp from './containers/MainApp';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    );
  }
}

export default App;
