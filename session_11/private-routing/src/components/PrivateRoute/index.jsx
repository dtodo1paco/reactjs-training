import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../util/auth';
const PrivateRoute = ({ component: TheComponent, ...rest }) => (
  <Route {...rest}
    render={(props) => (
      Auth.isAuthenticated
        ? <TheComponent {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
            }}
          />
    )}
  />
)

export default PrivateRoute;