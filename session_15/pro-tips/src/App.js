import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TestError from './components/TestError';
import Portal from './components/Portal';
import LazyTestError from './components/LazyTestError';
import LazyLoader from './components/LazyLoader'
import IntlContainer from './containers/IntlContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <TestError />
        <Portal />
        <LazyTestError />
        <LazyLoader />
        <IntlContainer />
      </div>
    );
  }
}

export default App;
