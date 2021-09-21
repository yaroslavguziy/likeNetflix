import React, { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { SignUp } from 'components/SignUp';
import 'db/app';
import { queryClient } from 'constants/query';

import './styles.scss';

export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
