import React from 'react';

/*
props
  label: label to show
  href: link to navigate to
  active: tells component if is active or not
 */
const Navlink = (props) => (
  <div className={props.active ? "active": ''}>
    <a href={props.href}>
      {props.label}
    </a>
  </div>
)

export default Navlink;

