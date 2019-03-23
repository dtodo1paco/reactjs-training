import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Fetch from './components/Fetch';
import FeatureFlag from './components/FeatureFlag';
import ItemDetail from './components/ItemDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch url="https://.... ... "
          render={(data) => <ItemDetail item={data.item} /> }
          error={(error) => <div>{error.message}</div>}
        />
        <FeatureFlag
          render={()=> <div style={{backgroundColor: "blue"}}>Alternate design</div>}
          else={()=> <div style={{backgroundColor: "green"}}>Normal design</div>}
        />
      </div>
    );
  }
}

export default App;
