import React from 'react';
import SlowComponent from '../SlowComponent/Loadable';

class LazyLoader extends React.Component {
  render() {
    return (
      <SlowComponent />
    )
  }
}

export default LazyLoader;