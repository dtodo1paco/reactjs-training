import React from 'react';
import Auth from '../../util/auth';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    Auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You need to Log in</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login;