import React from 'react';

import './styles.css';

export default class PostCSS extends React.Component {
  render() {
    return (
      <div className="myComponent">
        My component is here
        <div className="myComponent-title">
          Yay! this CSS is generated using postcss !
        </div>
        <div className="myComponent-intro">
          Lorem ipsum ... blah
        </div>
      </div>
    )
  }
}