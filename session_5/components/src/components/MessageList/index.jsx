import React from 'react';

//import Message from '../Message'
import Message from '../PureMessage'

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((m, i) => <Message key={i} message={m} />)}
      </ul>
    )
  }
}

export default MessageList;