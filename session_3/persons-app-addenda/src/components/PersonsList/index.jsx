/*eslint no-unused-expressions: 0*/
import React, { Component } from 'react';
import './styles.css';
import PersonItem from '../PersonItem';

class PersonsList extends Component {
  constructor(props) {
    super();
    this.handlePersonSelected = this.handlePersonSelected.bind(this);
  }

  handlePersonSelected(personId) {
    this.props.handlePersonSelected(personId);
  }

  render() {
    const { persons, personToView } = this.props;
    if (!persons) {
      return <div>Sorry, no results yet</div>
    }
    return (
      <div className="container">
        <ul className="list-group">
          {
          persons.map(p => {
            return <PersonItem
                handlePersonSelected={this.handlePersonSelected}
                person={p}
                selected={p.id === personToView}
              />
          })
          }
        </ul>
      </div>
    );
  }
}

export default PersonsList;