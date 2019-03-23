import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonsList from '../PersonsList';
import PersonDetail from '../PersonDetail';

class PersonComponent extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact path='/persons'
          render={(props) => <PersonsList {...props} persons={this.props.persons} />}
        />
        <Route
          path='/persons/:id'
          render={(props) => <PersonDetail {...props} persons={this.props.persons} />}
        />
      </Switch>
    );
  }
}

export default PersonComponent;