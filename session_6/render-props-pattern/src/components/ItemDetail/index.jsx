import React from 'react';
import './styles.css';


const ItemDetail = ({ item }) => (
  <React.Fragment>
    <h2>{item.title}</h2>
    <div>{item.description}</div>
  </React.Fragment>
)

export default ItemDetail;

