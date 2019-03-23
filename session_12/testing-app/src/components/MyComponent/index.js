import React from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {myInput: ''};
    this.changeState = this.changeState.bind(this);
  }

  changeState (event) {
    this.setState({
      myInput: event.target.value
    });
  }
  render() {
    return (
      <div className="myComponentClass">
        Component is here {this.props.title}
        <input
          name="myInput"
          onChange={(event) => {this.changeState(event)}}
          type="text" />
      </div>
    )
  }
}

MyComponent.propTypes = {
  title: PropTypes.string
}
