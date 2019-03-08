import React from 'react';
import PropTypes from 'prop-types';

export default class RenderValue extends React.Component {
  render() {
    const element = (<div>!!! {this.props.text} !!! </div>)
    return (
      <div className="component1">
        <h3>Render Component</h3>
          {element}
      </div>
    )
  }
}
RenderValue.propTypes = {
  text: PropTypes.string.isRequired
};




