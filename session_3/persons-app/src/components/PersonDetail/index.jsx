/*eslint no-unused-expressions: 0*/
import React, { Component } from 'react';
import './styles.css';

class PersonDetail extends Component {

  render() {
    const { person } = this.props;
    if (!person) {
      return null;
    }
    const { id, name, address, ...rest } = person;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <ul>
              {
                Object.keys(rest).map(function(key) {
                  return <li>{key}: {rest[key]}</li>;
                })
              }
              <li>
                address
                <ul>
                {
                  Object.keys(address).map(function(key) {
                    return <li>{key}: {address[key]}</li>;
                  })
                }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetail;