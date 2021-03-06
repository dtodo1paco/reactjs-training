import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './styles.css';

class CountryCard extends Component {
  render() {
    const { alpha2Code: code2 = "", region = null, name = {}, alpha3Code = '' } =
    this.props.country || {};

    const alpha3code = this.props.country.alpha3Code;
    const elEnlaceDeMiCountry = "https://....." + alpha3Code;
    return (
      <Fragment>
        <div className="col-sm-6 col-md-4 country-card">
          <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <img
                src={`http://www.countryflags.io/${code2.toLowerCase()}/flat/64.png`}
                className="d-block h-100"
                alt={`${code2} Flag`}
              />
            </div>
            <div className="px-3">
              <span className="country-name text-dark d-block font-weight-bold">
                <Link className="" to={`/countries/detail/${alpha3Code}`}>{name}</Link>
              </span>
              <span className="country-region text-secondary text-uppercase">
                {region}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    alpha2Code: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};

export default CountryCard;