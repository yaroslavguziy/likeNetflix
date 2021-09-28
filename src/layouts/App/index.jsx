import React, { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'layouts/Home';
import { Login } from 'layouts/Login';
import { Registration } from 'layouts/Registration';
import { Shows } from 'layouts/Shows';
import { Profile } from 'layouts/Profile';
import { Show } from 'layouts/Show';
import { ProfileUpdate } from 'layouts/ProfileUpdate';

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
      <BrowserRouter>
        <AppWrapper>
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
            <PrivateRoute exact path={routes.shows}>
              <Shows />
            </PrivateRoute>
            <PrivateRoute exact path={routes.profile}>
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path={routes.show}>
              <Show />
            </PrivateRoute>
            <PrivateRoute exact path={routes.updateProfile}>
              <ProfileUpdate />
            </PrivateRoute>
          </Switch>
        </AppWrapper>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
