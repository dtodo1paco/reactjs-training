import React from 'react';

const QUICK     = 10000000;
const SLOW      = 100000000;
const VERY_SLOW = 500000000;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.beSlow();
  }

  beSlow = () => {
    const N = QUICK;
    // const N = SLOW;
    // const N = VERY_SLOW;

    for (let i = 0; i < N; i++) {
      Math.random();
    }
    console.log("Am I slow enough ?");
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default Counter;