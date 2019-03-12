import React, { Component } from 'react';

class ControlledForm extends Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '', rpassword: '', isValid: false };
  }

  isValid(state) {
    return state.username && state.username.length > 0
          && state.password && state.password.length > 8
          && state.rpassword === state.password;
  }

  handleChange = ({ target }) => {
    const fieldChanged = target.name;
    const fieldValue = target.value;
    const nextState = {...this.state};
    nextState[fieldChanged] = fieldValue;
    nextState.isValid = this.isValid(nextState);
    this.setState(nextState);
  };

  render() {
    const { isValid } = this.state;
    return (
      <form style={{display: 'inline-grid'}}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label htmlFor="r-password">Repeat password</label>
        <input
          type="password"
          name="rpassword"
          value={this.state.rpassword}
          onChange={this.handleChange}
        />
        <p>Form is valid: { isValid ? 'YES':'NO' } </p>
        <button disabled={!isValid} type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default ControlledForm;
