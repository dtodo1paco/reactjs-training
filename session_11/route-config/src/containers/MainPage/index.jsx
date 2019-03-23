import React, { Component } from 'react';
import './styles.css';

import Persons from '../../components/Persons';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';
import Topics from '../../components/Topics';
const routes = [
  {
    path: "/home",
    component: Home,
    label: "Home",
  },
  {
    path: "/about",
    component: About,
    label: "About",
  },
  {
    path: "/topics",
    component: Topics,
    label: "Topics",
  },
];

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personToView, persons } = this.props;
    return (
      <div className="mainPage row">
        <ul>
          <li><Link to='/persons/'>Persons</Link></li>
          {
            routes.map( route =>
                <li key={route.path}><Link to={route.path}>{route.label}</Link></li>
            )
          }
        </ul>
        <Switch>
          {
          routes.map( route =>
            <Route key={route.path} path={route.path} component={route.component} />
          )
          }
          <Route path='/persons' render={(props) => <Persons {...props} persons={this.props.persons} />} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;