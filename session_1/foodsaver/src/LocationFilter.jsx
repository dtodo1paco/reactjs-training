import React, { Component } from 'react';

import { locations } from './data';

class LocationFilter extends Component {
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLoc"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Location
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLoc">
          {
            locations.map( loc => (
              <button className="dropdown-item" type="button">{loc}</button>
            ))
          }
        </div>
      </div>
    )
  }
}

export default LocationFilter;