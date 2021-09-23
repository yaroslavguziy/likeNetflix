import React, { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'layouts/Home';
import { Login } from 'layouts/Login';
import { Registration } from 'layouts/Registration';
import { Shows } from 'layouts/Shows';

import { PrivateRoute } from 'components/PrivateRoute';
import { AppWrapper } from 'components/AppWrapper';
import { Header } from 'components/Header';

import 'db/app';
import { queryClient } from 'constants/query';
import { routes } from 'constants/routes';

import './styles.scss';

export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={routes.home}>
              <Home />
            </Route>
            <Route exact path={routes.login}>
              <Login />
            </Route>
            <Route exact path={routes.registration}>
              <Registration />
            </Route>
            <PrivateRoute exact path={routes.private}>
              <Shows />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
