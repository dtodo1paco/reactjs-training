import React from 'react';
import styles from './CSSmodules.module.css';
export default class CSSmodules extends React.Component {
  render() {
    return (
      <div className={styles.someAmaizingClass}>
        CSS modules styles
      </div>
    )
  }
}