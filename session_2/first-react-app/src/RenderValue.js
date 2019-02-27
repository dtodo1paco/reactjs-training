import React from 'react';
class RenderValue extends React.Component {

  render() {
    this.props.showMessage();
    return (
      <div className="component1">
        <h3>Render Component</h3>
        <div>!!! {this.props.text1234} !!! </div>
      </div>
    )
  }
}
export default RenderValue;