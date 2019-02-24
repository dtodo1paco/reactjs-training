import React from 'react';
export default class FirstComponent extends React.Component {

  render() {
    const element = (<div>Text from Element</div>)
    return (
      <div className="component1">
        <h3>First Component</h3>
        {element}
      </div>
    )
  }
}