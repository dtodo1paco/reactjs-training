import React from 'react';
import PropTypes from 'prop-types';

class A extends React.Component {
  render () {
    return (<div>UN CARaaAJOTE{this.props.name}</div>);
  }
}
// React no va a mirar esto
A.cualquierCosa = 7;
// React no va a mirar esto
A.myFunc = function (a) {console.log("eoooo")};
// React SI va a mirar esto
A.propTypes = {
  name: PropTypes.string.isRequired,
  prop1: PropTypes.number,
}
// React SI va a mirar esto


export default A;
