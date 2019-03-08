import React, { Component } from 'react';

class ConditionalRender extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="UserResults">
        <ul>
          {
          results && results.map( item => <li>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}
export default ConditionalRender;