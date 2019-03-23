import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Fetch from './components/AxiosRemote';
import LoginForm from './components/LoginForm'
import PrivateComponent from './components/Private';
import { saveToken } from './util/storage';
import axios from 'axios';
const BASE_URL = "http://localhost:3000";
const URL_LOGIN = BASE_URL + "/api/auth/login";
const URL_GET = BASE_URL + "/api/auth/me";

const user = "dtodo1pacotest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  logIn = (data) => {
    saveToken(data);
    axios.defaults.headers.get['x-access-token'] = data.token;
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Fetch url={URL_LOGIN}
            render={(data) => {
              this.logIn(data);
              return <PrivateComponent
                data={data.nickname} url={URL_GET}
                />
            }}
            error={(error) => <div>{error.message}</div>}
          >
            <LoginForm />
          </Fetch>
        </header>
      </div>
    );
  }
}

export default App;
