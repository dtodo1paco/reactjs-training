import React, { Component } from 'react';
import './App.css';

import data from './data';
import DownloadList from './containers/DownloadList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Download countries info</h2>
        </header>
        <section>
          <h3>Europe</h3>
          <DownloadList elements={data.europe} />
          <h3>Africa</h3>
          <DownloadList elements={data.africa} />
        </section>
      </div>
    );
  }
}

export default App;
