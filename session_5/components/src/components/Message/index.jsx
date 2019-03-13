import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("rendering Message");
    return (
      <li style={{ margin: "10px" }}>
        {this.props.message}
      </li>)
  }
}

export default Message;