import React from 'react';

const BASE_URL = "https://restcountries.eu/rest/v2/name/"
const buildURL = (name) => BASE_URL + name;

class DownloadElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // your state here
    }
    this.loadData = this.loadData.bind(this);
  }

  // your handlers here
  loadData() {
    ...
    this.setState({
      countryInfo: true
    })
  }

  render() {
    // read props
    const { label } = this.props;

    // your dynamic info here
    const countryInfo = false;


    let description = 'Click to load info';
    if (countryInfo) {
      description = (
        <ul>
          <li>Area:  {countryInfo.area}</li>
          <li>Population:  {countryInfo.population}</li>
          <li>Capital:  {countryInfo.capital}</li>
          <li>Subregion:  {countryInfo.subregion}</li>
        </ul>
      );
    }
    return (
      <li>
        <h3>{label}</h3>
        {
        countryInfo &&
        <img src={countryInfo.flag} />
          }
        {
        !countryInfo &&
        <a href='#void' onClick={this.loadData()}>
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
          }
        <span className="info">
          <p>{description}</p>
        </span>
      </li>
    );
  }
}
export default DownloadElement;