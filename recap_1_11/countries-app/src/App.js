import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainPage />
        </Router>
      </div>
    );
  }
}

export default App;
