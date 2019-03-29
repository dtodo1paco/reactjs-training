import React from 'react';

import './styles.css';
import styles from './styles.js';

export default class CSSasProperty extends React.Component {
  render() {
    return (
      <div className="someAmaizingClass" style={styles.div}>
        Some amaizing text
      </div>
    )
  }
}