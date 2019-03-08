/*eslint no-unused-expressions: 0*/
import React, { Component } from 'react';
import './styles.css';

class PersonItem extends Component {

  constructor(props) {
    super();
  }

  handleOnClick = () => {
    this.props.handlePersonSelected(this.props.person.id);
  }

  render() {
    const { person } = this.props;
    if (!person) {
      return null;
    }
    const { name, role } = person;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <strong>{name}</strong>
        <i>{role}</i>
        <span className="badge badge-primary badge-pill">
          <a
            onClick={this.handleOnClick}
            href="#nowhere"
            className="btn btn-primary"
          >
            +
          </a>
        </span>
      </li>
    );
  }
}

export default PersonItem;