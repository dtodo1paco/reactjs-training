import React, {Component} from 'react';
import MessageList from '../MessageList';

class MessageHistory extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    // binds
    this._getLastMessage = this._getLastMessage.bind(this)
    this._onMessageChange = this._onMessageChange.bind(this)
  }

  _getLastMessage() {
    const lastMessage = this.state.messages[this.state.messages.length - 1]
    return lastMessage === undefined ? "" : lastMessage
  }

  _onMessageChange(event) {
    const messages = [...this.state.messages]
    messages.push(event.target.value)
    this.setState({ messages })
  }

  render() {
    return (
      <div className="Messages">
        <input
          type="text"
          value={this._getLastMessage()}
          onChange={this._onMessageChange}
        />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageHistory;