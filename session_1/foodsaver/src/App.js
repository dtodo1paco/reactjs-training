import React, { Component } from 'react';
import './App.css';
import LocationsFilter from './LocationFilter';
import Offers from './Offers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <LocationsFilter />
            </div>
            <div className="col-8">
              <Offers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
