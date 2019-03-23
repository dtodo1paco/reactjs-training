import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FetchComponent from './components/FetchRemote';
import RequestComponent from './components/RequestRemote';
import JQueryComponent from './components/JQueryRemote';
import AxiosComponent from './components/AxiosRemote';


const URL = "http://localhost:3000/items"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchComponent: 0 };
    this.anyFunction = anyFunction.bind(this)
  }

  anyFunction () {

  }

  changeFetchComponet = (e, id) => {
    e.preventDefault();
    this.setState({fetchComponent: id});
  }

  render() {
    const { fetchComponent } = this.state;
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="."
            onClick={ (e) => this.changeFetchComponet(e, 1)}
          >
            Click to fetch remote
          </a>
          <a href="."
            onClick={ (e) => this.changeFetchComponet(e, 2)}
          >
            Click to request remote
          </a>
          <a href="."
            onClick={ (e) => this.changeFetchComponet(e, 3)}
          >
            Click to jquery remote
          </a>
          <a href="."
            onClick={ (e) => this.changeFetchComponet(e, 4)}
          >
            Click to Axios remote
          </a>
          {
          fetchComponent === 1 && <FetchComponent url={URL}/>
          }
          {
          fetchComponent === 2 && <RequestComponent url={URL}/>
          }
          {
          fetchComponent === 3 && <JQueryComponent url={URL}/>
          }
          {
            fetchComponent === 4 && <AxiosComponent url={URL}/>
          }
        </header>
      </div>
    );
  }
}

export default App;
