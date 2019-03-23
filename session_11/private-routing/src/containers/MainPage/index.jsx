import React, { Component } from 'react';
import './styles.css';

import Persons from '../../components/Persons';
import Login from '../../components/LoginComponent';
import PrivateRoute from '../../components/PrivateRoute';
import PrivateComponent from '../../components/PrivateComponent';
import { Route, Switch, Link } from 'react-router-dom';

class MainPage extends Component {

  render() {
    return (
      <div className="mainPage row">
        <ul style={{paddingRight: '1em'}}>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/persons'>Persons</Link></li>
          <li><Link to='/private'>Private routing</Link></li>
        </ul>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/persons' render={(props) => <Persons {...props} persons={this.props.persons} />} />
          <PrivateRoute path="/private" component={PrivateComponent} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;