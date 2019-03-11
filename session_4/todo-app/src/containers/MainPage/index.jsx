import React, { Component } from 'react';
import styles from './styles.js';
import List from '../../components/List';
import Input from '../../components/Input';
import Title from '../../components/Title';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Learn React', 'Write Code', 'Test App'],
    }
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state;

    return (
      <div style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
      </div>
    )
  }
}

export default MainPage;