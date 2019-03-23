import React from 'react';

class FetchCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      error: null,
      loading: false,
    }
  }

  loadData = () => {
    this.setState({loading: true})
    fetch(this.props.url)
      .then( r => {
        console.log("Response status: " + r.status);
        return r.json()
      }, (err) =>
        this.setState({error: {fatal: true, message: "DNS no encontrada"}, loading: false})
      )
      .then(
        jsonResult => {
        this.setState({
          loading: false,
          countries: jsonResult
        });
      },
        error => {
        this.setState({
          loading: false,
          error: {
            fatal: true,
            message: "Fallo en la respuesta: " + error
          },
        });
      }
    )
      .catch( e => {
        this.setState({
          loading: false,
          error: {
            fatal: false,
            message: "Fallo en la llamada: " + e
          },
        });
      });
  }

  componentDidMount() {
    //this.loadData();
  }

  sendData = () => {
    const data = new FormData();
    data.append("field1","value1");
    fetch(this.props.url, {
      "method":"POST",
      "body": data,
    })
    .then( r => {
        console.log("server responded with: " + r.status)
      })
  }

  render() {
    const { countries, error, loading } = this.state;

    if (loading) return <div>loading...</div>
    if (error) {
      console.log("error: " + error.message);
      return this.props.error(error)
    }

    return <button onClick={this.sendData}>Send data</button>
/*
    if (!countries) return null;
    return (
      this.props.render(countries)
    )
    */
  }


}

export default FetchCountries;