import React  from 'react';
import axios from 'axios'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      items: []
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get(this.props.url)
      .then(function (response) {
        console.log(response);
        if (response && response.status !== 200) {
          throw Error("error code received: " + response.status);
        }
        this.setState({
          loading: false,
          items: response.data.items
        })
      }.bind(this))
      .catch(function (error) {
        this.setState({
          error,
          loading: false
        })
      }.bind(this));
  }

  render() {
    const { error, loading, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        {
          items.map(item => (
            <li key={item.id}>
              {item.name} {item.description}
            </li>
          ))
        }
        </ul>
      );
    }
  }
}

export default MyComponent;