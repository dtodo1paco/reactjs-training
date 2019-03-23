import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import './styles.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      error: false,
      inputs: [
        {
          name: 'username',
          focused: false,
          value: '',
          error: false
        },
        {
          name: 'password',
          focused: false,
          value: '',
          error: false
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(id, value) {
    // immutable array
    let newInputs = this.state.inputs.concat();
    newInputs[id].value = value;
    newInputs[id].error = false;
    this.setState({inputs: newInputs});
  }
  handleSubmit(event) {
    let errors = false;
    let newInputs = this.state.inputs.concat();
    for(let i = 0; i < this.state.inputs.length; i++) {
      if (this.state.inputs[i].value.length === 0) {
        errors = true;
        newInputs[i].error = true;
      }
    }
    this.setState({
      error: errors,
      inputs: newInputs
    });
    if (!errors) {
      this.setState({submitting: true});

      let user = {};
      this.state.inputs.map(function (item, i) {
        user[item.name] = item.value;
      });
      this.props.handler(user);
      this.reset();
    }
    event.preventDefault();
  }

  reset () {
    let newInputs = this.state.inputs.concat();
    for(let i = 0; i < this.state.inputs.length; i++) {
      newInputs[i].value = '';
    }
    this.setState({
      submitting: false,
      inputs: newInputs
    });
  }

  handleFocus(id) {
    // immutable array
    let newInputs = this.state.inputs.concat();
    newInputs[id].focused = true;
    this.setState({inputs: newInputs});
  }
  handleBlur(id) {
    // immutable array
    let newInputs = this.state.inputs.concat();
    newInputs[id].focused = false;
    this.setState({inputs: newInputs});
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <Input
          id="0" name="username"
          placeholder="Username" type="text"
          focus={this.handleFocus} blur={this.handleBlur} change={this.handleChange}
          value={this.state.inputs[0].value}
          focused={this.state.inputs[0].focused}
          error={this.state.inputs[0].error}
        />
        <Input id="1" name="password"
          placeholder="Password" type="password"
          focus={this.handleFocus}
          blur={this.handleBlur}
          change={this.handleChange}
          value={this.state.inputs[1].value}
          focused={this.state.inputs[1].focused}
          error={this.state.inputs[1].error}
        />
        <button type="submit"
          className={(this.state.inputs[1].error || this.state.inputs[0].error) ? 'iconButton error' : 'iconButton'}
          disabled={this.state.submitting}
        >
          <span className="label">Login</span>
        </button>
      </form>
    )
  }
}
export default LoginForm;