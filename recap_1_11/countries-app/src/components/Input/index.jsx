import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleChange(event) {
    this.props.change(this.props.id, event.target.value);
  }
  handleFocus(event) {
    this.props.focus(this.props.id);
  }
  handleBlur(event) {
    this.props.blur(this.props.id);
  }
  render() {
    return (
      <span className={(this.props.value.length > 0 || this.props.focused) ? 'input filled' : 'input'}>
        <input
          id={this.props.id}
          value={this.props.value}
          onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}
          className="field" type={this.props.type}
        />
        <label className={(this.props.error) ? 'label error' : 'label'}>
          <span className="content">{this.props.placeholder}</span>
        </label>
        <span className={(this.props.error) ? 'errorMessage visible' : 'errorMessage'}>This field cannot be empty.</span>
      </span>
    );
  }
}

export default Input;