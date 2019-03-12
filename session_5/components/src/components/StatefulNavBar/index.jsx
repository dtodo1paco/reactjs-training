import React, { Component } from 'react';

import './styles.css';
import NavLink from '../StatelessNavLink';

class StatefulNavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeIndex: null,
    };
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    const { activeIndex } = this.state;
    const { links } = this.props;
    return (
      <ul className="navbar">
      {
        links.map( (link, i) => (
          <li>
            <NavLink
              index={i}
              active={i === activeIndex}
              handleClick={this.handleClick}
              label={link.label}
            />
          </li>
        ))
      }
      </ul>
    );
  }
}

export default StatefulNavBar;
