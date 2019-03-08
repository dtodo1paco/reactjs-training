import React, { Component } from 'react';
import './styles.css';
import PersonsList from '../../components/PersonsList';
import PersonDetail from '../../components/PersonDetail';

class MainPage extends Component {
  constructor(props) {
    super();
    this.handlePersonSelected = this.handlePersonSelected.bind(this);
  }

  handlePersonSelected(personId) {
    this.props.handlePersonSelected(personId);
  }

  render() {
    const { personToView, persons } = this.props;
    const personsById = persons.filter(person => person.id === personToView);
    let personById = null;
    if (personsById.length > 0) {
      personById = personsById[0];
    }
    return (
      <div className="mainPage row">
        <div className="col-sm-4">
          <PersonsList
            persons={this.props.persons}
            handlePersonSelected={this.handlePersonSelected}
          />
        </div>
        <div className="col-sm-8">
          <PersonDetail person={personById} />
        </div>
      </div>
  );
  }
}

export default MainPage;