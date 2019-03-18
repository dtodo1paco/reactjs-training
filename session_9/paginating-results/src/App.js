import React, { Component } from 'react';
import './App.css';

import PagingInComponent from './components/PagingInComponent'
const URL = "https://restcountries.eu/rest/v2/all";

class App extends Component {

  render() {
    return (
      <div className="App">
        <PagingInComponent url={URL} />
      </div>
    );
  }
}

export default App;
