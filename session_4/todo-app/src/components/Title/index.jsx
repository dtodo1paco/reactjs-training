import React, { Component } from "react";
import styles from './styles.js';

export default class Title extends Component {
  render() {
    const { children } = this.props;
    console.log("rendering title");
    return (
      <div style={styles.header}>
        <div style={styles.title}>{children}</div>
      </div>
    );
  }
}
