import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  render() {
    const { nameForSummary, skillsForSummary } = this.props;
    return (
      <div className="summary">
        <h1>{nameForSummary}</h1>
        {
          skillsForSummary.map( elem => (<div className="skill">{elem}</div>))
        }
      </div>
    )
  }
  onClick() {

  }
}
Summary.propTypes = {
  nameForSummary: PropTypes.string.isRequired,
  skillsForSummary: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Summary;