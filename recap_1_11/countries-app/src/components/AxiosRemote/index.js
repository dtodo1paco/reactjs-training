import React  from 'react';
import './styles.css';
import axios from 'axios';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: void 0,
      dataRecv: void 0,
    };
  }

  componentDidMount() {
  }

  async fetchData(data) { // if data, post. else, get
    this.setState({loading: true});
    console.log("fetchind data: " + this.props.url);
    if (data) {
      axios.post(this.props.url, data)
        .then(function (response) {
          console.log(response);
          if (response && response.status !== 200) {
            throw Error("error code received: " + response.status);
          }
          this.setState({
            loading: false,
            dataRecv: response.data,
          })
        }.bind(this))
        .catch(function (error) {
          this.setState({
            error,
            loading: false,
          })
        }.bind(this));
    } else {
      axios.get(this.props.url)
        .then(function (response) {
          console.log(response);
          if (response && response.status !== 200) {
            throw Error("error code received: " + response.status);
          }
          this.setState({
            loading: false,
            dataRecv: response.data,
          })
        }.bind(this))
        .catch(function (error) {
          this.setState({
            error,
            loading: false,
          })
        }.bind(this));
    }
  }

  render() {
    const { error, dataRecv, loading } = this.state;
    if (loading) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    if (error) return this.props.error(error);
    if (dataRecv) return this.props.render(dataRecv);
    else {
      const children = React.Children.map(this.props.children, (child, index) => {
        return React.cloneElement(child, {
          handler: (data) => this.fetchData(data)
        });
      });
      return (
        <div>{children}</div>
      )
    }
  }
}

export default Fetcher;