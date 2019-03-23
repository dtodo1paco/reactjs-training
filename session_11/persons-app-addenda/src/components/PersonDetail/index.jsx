/*eslint no-unused-expressions: 0*/
import React, { Component } from 'react';
import './styles.css';

class PersonDetail extends Component {

  render() {
    const { person } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <div className="card-text">
            <ul>
              {
                Object.keys(person).map(function(key) {
                  if (key !== 'address')
                    return <li key={key}>{key}: {person[key]}</li>;
                  return null;
                })
              }
              <li>
                address
                <ul>
                {
                  Object.keys(person.address).map(function(key) {
                    return <li key={key}>{key}: {person.address[key]}</li>;
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