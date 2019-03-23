import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import MainPage from './containers/MainPage';

import { persons } from './data.js';
import {
  BrowserRouter as Router
  } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      personToView: null,
      persons: persons
    };
    this.handlePersonSelected = this.handlePersonSelected.bind(this);
  }

  handlePersonSelected(personId) {
    this.setState({personToView: personId});
  }

  render() {
    return (
      <Layout>
        <Router>
          <MainPage
            persons={this.state.persons}
            personToView={this.state.personToView}
            handlePersonSelected={this.handlePersonSelected}
          />
        </Router>
      </Layout>
    );
  }
}

export default App;
