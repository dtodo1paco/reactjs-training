import React, { Component } from 'react';
import './App.css';

import Layout from './Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          Some amaizing content
        </Layout>
      </div>
    );
  }
}

export default App;
