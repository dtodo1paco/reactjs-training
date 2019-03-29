import React, { Component } from 'react';
import './styles.css';

import { Route, Switch } from 'react-router-dom';
import UserProfile from '../../components/UserProfile';

class RouteManager extends Component {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route path='/username/:username' component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default RouteManager;

