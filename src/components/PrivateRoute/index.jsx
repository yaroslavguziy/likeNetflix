import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from 'hooks/user';
import { routes } from 'constants/routes';

export const PrivateRoute = ({ children, ...rest }) => {
  const user = useUser();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
