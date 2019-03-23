/*eslint no-unused-expressions: 0*/
import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class PersonItem extends Component {

  render() {
    const { person, selected } = this.props;
    if (!person) {
      return null;
    }
    const selectedStyle = selected ? 'active' : '';
    const { name, role } = person;
    return (
      <li className={'list-group-item d-flex justify-content-between align-items-center ' + selectedStyle}>
        <strong>{name}</strong>
        <i>{role}</i>
        <span className="badge badge-primary badge-pill">
          <Link to={`/persons/${person.id}`} style={{color:'white'}}>
            +
          </Link>
        </span>
      </li>
    );
  }
}

export default PersonItem;