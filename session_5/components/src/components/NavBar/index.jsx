import React from 'react';
import Navlink from '../Navlink';
class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0
    }
  }

  handleClick = (numerito) => {

  }

  render() {
    const activoPrimero = false;
    const activoSegundo = false;
    if (this.state.activeLink === 0) activoPrimero = true;
    if (this.state.activeLink === 1) activoSegundo = true;
    return (
      <div>
        <Navlink active={activoPrimero} label="Home" href="/" handleClick={this.handleClick} index={0} />
        <Navlink active={activoSegundo} label="Contact" href="/contact" handleClick={this.handleClick} index={1} />
        <Navlink active={this.state.active === 2} label="Login" href="/login" handleClick={this.handleClick} index={2} />
      </div>
    )
  }


}

export default NavBar;