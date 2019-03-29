import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';

class NavigationDrawerDemo extends Component {
  render() {
    return (
      <NavigationDrawer
        autoclose={false}
        defaultVisible={false}
        drawerTitle="react-md"
        toolbarTitle="Welcome to react-md"
        navItems={this.props.navItems.map( nav => (
          <a key={nav.id} href={nav.link}>{nav.label}</a>
        ))}
      >
      {this.props.children}
      </NavigationDrawer>
    );
  }
}

export default NavigationDrawerDemo;