/*eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import RenderValue from './RenderValue';

import Person from './components/Person';

class App extends Component {
  text = 'hello';
  getParentText = () => { return this.text};
  setParentText = (t) => { console.log("... setting ... " + t);
    this.text = t;
  };

  handleClick = (p) => {
    console.log("Enabled clicked" + p.target.value);
  }

  render() {
    return (

      <div className="App">
        <RenderValue text="aa" />
        <Person
          name="Garfield"
          age={8}
          phoneNumbers={["123-456-789", "666111222"]}
          handleEnabledClick={this.handleClick}
        />
        <FirstComponent text={this.getParentText()} handleTextChange={this.setParentText} />
      </div>
    );
  }
}

export default App;
