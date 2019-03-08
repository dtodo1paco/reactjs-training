import React from 'react';
import PropTypes from 'prop-types';

import Summary from '../Summary';

export default class Person extends React.Component {


  render() {
    const { name, phoneNumbers, age, skills, enabled, handleEnabledClick } = this.props;
    return (
      <div className="person">
        <h3>Person Component</h3>
        <Summary nameForSummary={name + "_" + enabled} skillsForSummary={skills.slice(1)} />
          <p>Age: {age}</p>
          <p onClick={handleEnabledClick}>Enabled: {enabled}</p>
          <div> Phone numbers
            <ul>
          {
            phoneNumbers.map( pn => <li>{pn}</li>)
          }
              </ul>
            </div>
      </div>
    )
  }
}
Person.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  age: PropTypes.number,
  skills: PropTypes.array,
  enabled: PropTypes.bool,
  handleEnabledClick: PropTypes.func,
};

Person.defaultProps = {
  age: 0,
  skills: ['eat spagghetti', 'sleep', 'drink'],
  enabled: true,
  handleEnabledClick: function () { console.log("default function")}
};