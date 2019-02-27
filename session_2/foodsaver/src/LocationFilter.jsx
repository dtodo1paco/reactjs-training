import React, { Component } from 'react';

class LocationFilter extends Component {
  handleClick = location => {
    this.props.onChange(location);
  }

  render() {
    const { location, locations } = this.props;
    const selected = (
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLoc"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {location ? location : 'Location'}
      </button>
    );
    return (
      <div className="dropdown">
        {selected}
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLoc">
          {
            locations.map( loc => (
              loc !== location
                ? <button className="dropdown-item" type="button" onClick={this.handleClick.bind(this,loc)}>{loc}</button>
                : null
            ))
          }
        </div>
      </div>
    )
  }
}

export default LocationFilter;