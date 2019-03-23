import React, { Component } from 'react';

import Header from '../../components/Header';
import RouteContainer from '../../containers/RouteContainer';

import './styles.css';

class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <Header />
        <RouteContainer />
      </div>
    );
  }
}
export default MainApp;