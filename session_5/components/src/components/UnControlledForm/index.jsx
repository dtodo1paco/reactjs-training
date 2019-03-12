import React, { Component } from 'react';

class UnControlledForm extends Component {

  handleSubmit = event => {
    event.preventDefault();
    alert('Your username is: ' + this.username.value);
    alert('Your password is: ' + this.password.value);
  };

  // useless
  handleChange = event => {
    console.log("tn " + event.currentTarget.name);
    this[event.currentTarget.name].value = event.currentTarget.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'inline-grid'}}>
        <label htmlFor="username">username</label>
        <input onChange={this.handleChange}
          type="text"
          name="username"
          ref={(input) => this.username = input}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          ref={(input) => this.password = input}
        />
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default UnControlledForm;
