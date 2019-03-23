import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './styles.css';

import Loading from '../Loading';

class CountryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: void 0,
    };
  }

  async fetchData() {
    const theURL = this.props.url + this.props.match.params.alpha3code;
  console.log("theURL: " + theURL);
    const response = await fetch(theURL);
    const result = await response.json();
    this.setState({country: result});
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { country } = this.state;
    if (!country) return <Loading message="Fetching country"/>;
    return (
      <Fragment>
        <div className="country-card">
          <div className="country-card-container-1 border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <img
                src={`http://www.countryflags.io/${country.alpha2Code.toLowerCase()}/flat/64.png`}
                className="d-block h-100"
                alt={`${country.code2} Flag`}
              />
            </div>
            <div className="px-6">
              <span className="country-name text-dark d-block font-weight-bold">
                {country.name}
              </span>
              <span className="country-region text-secondary text-uppercase">
                #people {country.population}
              </span>
              <span className="country-region text-secondary text-uppercase">
                Capital: {country.capital}
              </span>
              <span className="country-region text-secondary text-uppercase">
                Region: {country.region}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CountryDetail;