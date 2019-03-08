import React from 'react';
import PropTypes from 'prop-types';
class TodoForm extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById("todo-form-text");
    console.log("Event: " + text.value);
    this.props.onSubmitTodo(text.value);
    text.value = '';

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" id="todo-form-text" />
        <input type="submit" value="Add Todo" />
      </form>
    )
  }

}

TodoForm.propTypes = {
  onSubmitTodo: PropTypes.func.isRequired;
}

export default TodoForm;