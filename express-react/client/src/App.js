import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApiComponent from './components/ApiComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
       <ApiComponent />
      </div>
    );
  }
}

export default App;
