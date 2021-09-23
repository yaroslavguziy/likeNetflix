import React from 'react';
import { Container } from 'react-bootstrap';

import { SignIn } from 'components/Login';

export const Login = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <SignIn />;
    </Container>
  );
};
