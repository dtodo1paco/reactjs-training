import React, {Component} from 'react';
import MessageList from '../MessageList';

class MessageHistory extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    // binds
    this.getLastMessage = this.getLastMessage.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  getLastMessage() {
    const lastMessage = this.state.messages[this.state.messages.length - 1]
    return lastMessage === undefined ? "" : lastMessage
  }

  onMessageChange(event) {
    const messages = [...this.state.messages]
    messages.push(event.target.value)
    this.setState({ messages })
  }

  render() {
    return (
      <div className="Messages">
        <input
          type="text"
          value={this.getLastMessage()}
          onChange={this.onMessageChange}
        />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageHistory;