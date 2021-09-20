import React, { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Signup } from 'components/Signup';
import 'db/app';

import './styles.scss';

const queryClient = new QueryClient();

export const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
