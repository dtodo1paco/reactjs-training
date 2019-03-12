import React from 'react';
import './styles.css';

const NavLink = props => (
  <a
    href="#0"
    onClick={() => props.handleClick(props.index)}
    className={props.active ? 'active':''}
  >
    {props.label}
  </a>
)

export default NavLink;