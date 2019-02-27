import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    };
  }


  onSubmitTodo = (newTodo) => {
    var nextItems = this.state.items.concat([newTodo]);
    this.setState({items : nextItems});
    console.log("items: " + this.state.items);
  }

  render() {

    return (
      <div className="App">
        <div>
          <h3>TODO</h3>
          <TodoList orientation="vertical" todos={this.state.items} />
          <TodoForm onSubmitTodo={this.onSubmitTodo} />
        </div>
      </div>
    );
  }
}

export default App;
