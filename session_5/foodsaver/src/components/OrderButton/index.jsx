import React, { Component } from 'react';

const OrderButton = () =>
(
  <div className="input-group-append">
    <div className="col-4">
      <input className="form-control" type="number" defaultValue="0" id="qty" name="qty" />
    </div>
    <button type="button" className="btn btn-primary">Order</button>
  </div>
)


export default OrderButton;