import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Componensito from './MyComponent';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="subcomponent">
            <Componensito />
          </div>
          <p>
            Edit <code>src/App.js</code> andkljlkjlk save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
