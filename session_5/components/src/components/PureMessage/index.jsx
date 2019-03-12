import React, {PureComponent} from 'react';

class Message extends PureComponent {
  render() {
    return <li style={{ margin: "10px" }}> {this.props.message} </li>
  }
}
export default Message;