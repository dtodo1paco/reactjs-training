import React from 'react';

class Button extends React.Component {

  handleClick = () => {
    this.props.handler();
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.label}</button>
  }

}

export default Button;