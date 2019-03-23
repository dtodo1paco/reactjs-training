import React, { Component } from 'react';

class OrderButton extends Component {
  render() {
    return (
      <div className="input-group-append">
        <div className="col-4">
          <input className="form-control" type="number" defaultValue="0" id="qty" name="qty" />
        </div>
        <button type="button" className="btn btn-primary">Order</button>
      </div>
    )
  }
}

export default OrderButton;