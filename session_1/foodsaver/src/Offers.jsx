import React, { Component } from 'react';
import OrderButton from './OrderButton';
import './Offers.css';

import { offers } from './data';

class Offer extends Component {
  render() {
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