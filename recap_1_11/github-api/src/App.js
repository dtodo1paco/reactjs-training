import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouteManager from './containers/RouteManager';
import Header from './containers/Header';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <RouteManager  />
      </BrowserRouter>
    );
  }
}

export default App;
