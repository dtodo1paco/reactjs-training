import React, { Component } from "react";
import styles from './styles.js';

export default class List extends Component {

  renderItem = (text, i) => {
    const { onClickItem } = this.props;
    return (
      <div style={styles.item}>
        {text}<span style={styles.closeIcon}
        onClick={ () => onClickItem(i)}>X</span>
      </div>
    );
  };
  render() {
    const { list } = this.props;
    return (
      <div style={styles.container}>
        {list.map(this.renderItem)}
      </div>
    );
  }
}

