import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout';
import MainPage from './containers/MainPage';

import { persons } from './data.js';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      personToView: null,
    };
    this.handlePersonSelected = this.handlePersonSelected.bind(this);
  }

  handlePersonSelected(personId) {
    this.setState({personToView: personId});
  }

  render() {
    return (
      <Layout title="my app">
        <MainPage
          persons={persons}
          personToView={this.state.personToView}
          handlePersonSelected={this.handlePersonSelected}
        />
      </Layout>
    );
  }
}

export default App;
