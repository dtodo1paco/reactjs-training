import React from 'react';

class ControlledForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: '',
      isValid: false
    }
  }

  /*
  event.target --> contiene una referencia al elemento que lanza el evento
  event.target.name --> contiene el name del elemento
  event.target.value --> contiene el value del elemento
   */
  handleChange = (event) => {
    console.log("event: " + event.target.name);
    const field = event.target.name;
    const value = event.target.value;
    const newState = {...this.state};
    newState[field] = value;

    newState.isValid = this.isValid(newState);
    this.setState(newState);
  }

  isValid = (state) => {
    return (
      state.username && state.username.length > 3
      && state.password > 7
    )
  }

  render () {
    const isValid = this.state.isValid ? "VALID": "INVALID";
    return (
      <form>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          isValid:  {isValid}
      </form>
    )
  }
}

export default ControlledForm;