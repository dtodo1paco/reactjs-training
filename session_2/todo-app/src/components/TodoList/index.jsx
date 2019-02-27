import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';


class TodoList extends React.Component {
  render() {
    return (
      <div>
      <ul>
      {
        this.props.todos.map( item => (
          <TodoItem text={item} />
        ))
      }
      </ul>
      </div>
    )
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}


export default TodoList;