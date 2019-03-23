import React from 'react';

const BASE_URL = "https://restcountries.eu/rest/v2/name/"
const buildURL = (name) => BASE_URL + name;

class DownloadElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: null,
      error: null,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    fetch(buildURL(this.props.name))
    .then( response => {
        if (response.status === 200) {
          response.json()
            .then( results => {
              const country = results[0];
              console.log("country: " + results)
              this.setState({country});
            })
          .catch(error => {
              this.setState({error})
            })
        }
      })
    .catch(error => {
        this.setState({error})
      })
  }

  render() {
    const { label } = this.props;
    const { country } = this.state;
    let description = '';
    if (country) {
      description = (
        <ul>
          <li>Area:  {country.area}</li>
          <li>Population:  {country.population}</li>
          <li>Capital:  {country.capital}</li>
          <li>Subregion:  {country.subregion}</li>
        </ul>
      );
    }
    return (
      <li>
        <h3>{label}</h3>
        {
          country &&
           <img src={country.flag} />
        }
        {
          !country &&
            <a href='#void' onClick={this.handleClick}>
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