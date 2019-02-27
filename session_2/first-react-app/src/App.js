/*eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import RenderValue from './RenderValue';

class App extends Component {
  text = 'hello';
  getParentText = () => { return this.text};
  setParentText = (t) => { console.log("... setting ... " + t);
    this.text = t
  };
  consolog = () => console.log("here i am");

  render() {
    return (

      <div className="App">
        <RenderValue text1234="hello" showMessage={this.consolog} />
        <RenderValue text1234="world" showMessage={this.consolog} />


        <RenderValue text1234={this.getParentText()} showMessage={this.consolog}  />
        <FirstComponent text={this.text} handleTextChange={this.setParentText} />
      </div>
    );
  }
}

export default App;
