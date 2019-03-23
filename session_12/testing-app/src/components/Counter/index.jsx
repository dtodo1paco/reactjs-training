import React from 'react';
import './styles.css';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      count: 1
    };
  }

  increment = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  render() {
    return (
      <div className="counter">
        <h2>Number of clicks: {this.state.count}</h2>
        <p> This is my component. Please click it!</p>
        <button onClick={this.increment}>Increment!</button>
      </div>
    );
  }
}
Counter.displayName = "Counter";
Counter.propTypes = {}
Counter.defaultProps = {}
export default Counter;