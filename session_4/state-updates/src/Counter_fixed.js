import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log("I have been mounted!");
  }

  shouldComponentUpdate (nextProps, nextState) {

    return true;
  }

  incrementCounter = () => {
    console.log("incrementing counter: " + this.state.counter);
    this.setState((state) => { // state is the current state
      // Important: read `state` instead of `this.state` when updating.
      const newCounter = state.counter + 1
      return {counter: newCounter}
    });

  }

  incrementCounter4times = () => {
    for (let i=0; i<4; i++) {
      const a = this.incrementCounter;
      a();
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
