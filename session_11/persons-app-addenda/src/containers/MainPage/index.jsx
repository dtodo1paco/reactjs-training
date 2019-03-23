import React, { Component } from 'react';
import './styles.css';

import Persons from '../../components/Persons';
import { Route, Switch, Link } from 'react-router-dom';

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
        </ul>
        <Switch>
          <Route path='/persons'
            render={(props) => <Persons {...props}
              persons={this.props.persons}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default MainPage;