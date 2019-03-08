import React from 'react';
export default class FirstComponent extends React.Component {

  handleClick = () => {
    this.props.handleTextChange('new component text');
  }

  render() {
    console.log("PROPS: " + JSON.stringify(this.props));
    const element = (<div>{this.props.text} from Element</div>)
    return (
      <div className="component1">
        <h3>First Component</h3>
        {element}
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}