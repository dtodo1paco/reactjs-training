import React from 'react';
import NavBarLink from './NavBarLink';

export default class StyledComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavBarLink href="#0" color="">Home</NavBarLink></li>
          <li><a className="unaClasUnica">Home</a>
        </ul>
      </div>
    )
  }
}