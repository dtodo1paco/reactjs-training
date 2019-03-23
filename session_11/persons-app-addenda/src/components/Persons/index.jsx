import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonsList from '../PersonsList';
import PersonDetail from '../PersonDetail';

class PersonComponent extends React.Component {
  render() {
    const { persons } = this.props;
    return (
      <Switch>
        <Route
          exact path='/persons'
          render={(props) => <PersonsList {...props} persons={this.props.persons} />}
        />
        <Route
          path='/persons/:id'
          render={(props) => {
            const p = persons.find(elem => elem.id === props.match.params.id)
            return <PersonDetail
              {...props}
              person={p}
            />}
          }

        />
      </Switch>
    );
  }
}

export default PersonComponent;