import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from 'hooks/user';
import { routes } from 'constants/routes';

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
              pathname: routes.registration,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
