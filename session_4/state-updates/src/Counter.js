import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    console.log("incrementing counter: " + this.state.counter);
    this.setState({
      counter: this.state.counter + 1
    });
    console.log("counter incremented: " + this.state.counter);
  }

  incrementCounter4times = () => {
    for (let i=0; i<4; i++) {
      this.incrementCounter();
    }
  }

  render() {
    return (
      <div className="Counter">
        <div id='counter'>{this.state.counter}</div>
        <button onClick={this.incrementCounter}> +1 </button>
        <button onClick={this.incrementCounter4times}> +4 </button>
      </div>
    );
  }
}

export default Counter;
