import React, { Component } from 'react';

const MESSAGE_TYPES = {
  success: <div className="alert alert-success">Yeah!</div>,
  error: <div className="alert alert-danger">Ooops :(</div>,
  info: <div className="alert alert-info">Info message</div>,
  warning: <div className="alert alert-warning">Warning!</div>,
};
function Message({ type }) {
  return (
    <div className="message">
      {MESSAGE_TYPES[type]}
    </div>
  );
}

export default Message;