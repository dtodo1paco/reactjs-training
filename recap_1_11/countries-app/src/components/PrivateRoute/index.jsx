import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../util/storage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={(props) => (
      isAuth()
        ? <Component {...props} {...rest} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
            }}
          />
    )}
  />
)

export default PrivateRoute;