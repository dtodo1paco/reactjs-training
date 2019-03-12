import React from 'react';
import './styles.css';

const Button = props => (
  <button className={"button " + props.type} onClick={props.onClick}>{props.label}</button>
)

export default Button;