import React from 'react';
import { saveToken } from '../../util/storage';
import { Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm';
import AxiosRemote from '../AxiosRemote'

class LoginComponent extends React.Component {

  state = {
    user: void 0,
  }

  logIn = (user) => {
    console.log("loggin user: " + user);
    this.setState({user})
  }

  render() {
    const { user } = this.state;
    const goTo = this.props.location.state ? this.props.location.state.from.pathname : '/countries';
    return (
      <React.Fragment>
        <AxiosRemote
          url="http://localhost:4000/api/auth/login"
          error={(error) => <div>Error</div>}
          render={(data) => {
            saveToken(data);
            console.log(this.props)
            return <Redirect
              to={{
                pathname: goTo,
                state: { referrer: '/login' }
              }}
            />
          }

            }>
          <LoginForm/>
        </AxiosRemote>
      </React.Fragment>
    )
  }
}

export default LoginComponent;