import React, { Component } from 'react';
import OrderButton from './OrderButton';
import './Offers.css';

class Offer extends Component {
  render() {
    const { offers } = this.props;
    return (
      <div className="list-inline">
      {
        offers.map( item => (
          <div className="list-inline-item input-group offer">
            <div className="form-control">
                {item.product_name}
            </div>
            <OrderButton />
          </div>))
      }
      </div>
    )
  }
}

export default Offer;