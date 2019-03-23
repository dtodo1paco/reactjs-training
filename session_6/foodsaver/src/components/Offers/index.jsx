import React, { Component } from 'react';
import OrderButton from '../OrderButton';
import './styles.css';


class Offers extends Component {
  constructor(props) {
    super(props);
  }

  getRestaurantsInLocation (location) {
    return this.props.restaurants.filter (rest => rest.location_id === location.id);
  }
  isOfferInLocation(offer, location) {
    const restInLocation = this.getRestaurantsInLocation(location);
    return restInLocation.find( rest => rest.id === offer.restaurant_id);
  }

  render() {
    const { offers, location, restaurants } = this.props;
    const filteredOffers = location ? offers.filter( offer => this.isOfferInLocation(offer, location) ) : offers;
    return (
      <div className="list-inline">
      {
        filteredOffers.map( item => (
          <div key={item.id} className="list-inline-item input-group offer">
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

export default Offers;