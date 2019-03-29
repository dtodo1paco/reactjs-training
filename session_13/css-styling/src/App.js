import React, { Component } from 'react';
import './App.css';

import Toggler from './components/Toggler';
import CSSasProperty from './components/CSSasProperty';
import CSSmodules from './components/CSSmodules';
import SCSSmodule from './components/SCSSmodule';
import PostCSS from './components/PostCSS';
import StylusComponent from './components/StylusComponent';
import StyledComponent from './components/StyledComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggler />
        <CSSasProperty />
        <CSSmodules />
        <SCSSmodule />
        <PostCSS />
        <StylusComponent />
        <StyledComponent />
      </div>
    );
  }
}

export default App;
