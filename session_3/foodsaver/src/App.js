import React, { Component } from 'react';
import './App.css';
import LocationsFilter from './LocationFilter';
import Offers from './Offers';
import { offers, locations, restaurants } from './data';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      location: null,
      offers,
      locations,
      restaurants,
    }
  }

  handleLocationChange (loc) {
    this.setState({
      location: loc
    });
  }

  render() {
    const { offers, locations, location, restaurants } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <LocationsFilter
                locations={locations}
                location={this.state.location}
                onChange={this.handleLocationChange.bind(this)}
              />
            </div>
            <div className="col-8">
              <Offers offers={offers} location={location} restaurants={restaurants} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
