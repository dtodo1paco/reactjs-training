import React, {PureComponent} from 'react';

class Message extends PureComponent {
  render() {
    console.log("rendering PureMessage");
    return (
      <li style={{ margin: "10px" }}>
        {this.props.message}
      </li>
    )
  }
}
export default Message;