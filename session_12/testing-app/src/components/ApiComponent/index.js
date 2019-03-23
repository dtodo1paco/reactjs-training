import React from 'react';
import PropTypes from 'prop-types';

import { fetchData } from '../../modules/fetchRemote';

export default class ApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: void 0, error: void 0,};
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick (event) {
    const newState = {};
    try {
      const data = await fetchData(this.props.url);
      newState.response = data;
    } catch (err) {
      newState.error = err
    }
    this.setState(newState);
  }
  render() {
    const { response } = this.state;
    return (
      <div className="myComponentClass">
        Component is here {this.props.title}
        <button onClick={this.handleClick}>Click me to call an API</button>
        { response && <p>Data received {response.bio}</p>}
      </div>
    )
  }
}

ApiComponent.propTypes = {
  url: PropTypes.string.isRequired,
}
