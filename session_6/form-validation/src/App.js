import React, { Component } from 'react';

import './App.css';

import FormValidator from './components/FormValidator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormValidator />
      </div>
    );
  }
}

export default App;
