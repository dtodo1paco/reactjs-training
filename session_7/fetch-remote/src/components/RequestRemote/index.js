import React from 'react';

import request from 'request';

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
    const self = this;
    request(this.props.url, function (error, response, body) {
      console.log("response: " + response.statusCode);
      if (error || (response && response.statusCode !== 200)) {
        self.setState({loading: false, error})
      } else {
        const json = JSON.parse(body);
        self.setState({loading: false, items: json.items})
      }
    });
  }

  sendData = () => {
    const formData = {
      field1:     'value1',
      field2:     'value2',
    };

    request.post(
      {
        url: this.props.url,
        form: formData
      },
      function (err, httpResponse, body) {
        console.log(err, body);
      }
    );

  }

  render() {
    const { error, loading, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <ul>
          {
            items.map(item => (
              <li key={item.id}>
                {item.name} {item.description}
              </li>
            ))
          }
          </ul>
          <button onClick={this.sendData}> Send data</button>
        </React.Fragment>
      );
    }
  }
}

export default MyComponent;