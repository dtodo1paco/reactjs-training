import React, { Component } from "react";
import styles from './styles.js';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      fruits: ["banana", "apple", "strawberry"],
    }
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // set up resources
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // free resources
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { date } = this.state;
    return (
      <div style={styles.header}>
        <div style={styles.title}>{date.toISOString()}</div>
      </div>
    );
  }
}
