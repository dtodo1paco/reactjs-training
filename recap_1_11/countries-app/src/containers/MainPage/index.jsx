import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './styles.css';

import Layout from '../Layout';

import Home from '../../components/Home'
import Countries from '../../components/Countries';
import Login from '../../components/LoginComponent';

import { saveToken } from '../../util/storage';

class MainPage extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route path='/login' component={Login} />
          <Route path='/logout' render={(props) => {
            saveToken(null);
            return <Redirect to="/" />
          }} />
          <Route path='/countries'
            render={(props) => <Countries {...props} />} />
        </Switch>
      </Layout>
    );
  }
}

export default MainPage;