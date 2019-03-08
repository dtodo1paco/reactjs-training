import React, { Component } from 'react';

const MESSAGE_TYPES = (text) => ({
  success: <div className="alert alert-success">{text}</div>,
  error: <div className="alert alert-danger">{text}</div>,
  info: <div className="alert alert-info">{text}</div>,
  warning: <div className="alert alert-warning">{text}</div>,
});
function MessageConf({ type, text }) {
  return (
    <div className="message">
      {MESSAGE_TYPES(text)[type]}
    </div>
  );
}

export default MessageConf;