import React, { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'layouts/Home';
import { Login } from 'layouts/Login';
import { PrivateRoute } from 'components/PrivateRoute';
import 'db/app';
import { queryClient } from 'constants/query';
import { routes } from 'constants/routes';
import { AppWrapper } from 'components/AppWrapper';

import './styles.scss';

export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.home}>
              <Home />
            </Route>
            <Route exact path={routes.login}>
              <Login />
            </Route>
            <PrivateRoute exact path={routes.private}>
              123
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
