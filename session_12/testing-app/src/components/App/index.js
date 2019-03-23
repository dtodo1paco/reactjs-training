import React, { Component } from 'react';
import './App.css';
import MyComponent from '../MyComponent';
import FullList from '../FullList';
import List from '../FullList';
import ApiComponent from '../ApiComponent';
import Counter from '../Counter'
import ApiForBeginners from '../ApiForBeginners'
const LIST = [
  "one",
  "two",
  "three",
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>App</p>
        <MyComponent title="a" />
        <FullList items={[]} />
        <List items={LIST} />
        <Counter />
        <ApiComponent url="https://api.github.com/users/dtodo1paco" />
        <ApiForBeginners url="https://api.github.com/users/dtodo1paco" />
      </div>
    );
  }
}

export default App;
