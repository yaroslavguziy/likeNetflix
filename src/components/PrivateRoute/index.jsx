import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from 'hooks/user';

export const PrivateRoute = ({ children, ...rest }) => {
  const user = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
