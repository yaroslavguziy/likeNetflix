import React from 'react';

import { SignUp } from 'components/SignUp';
import { Container } from 'react-bootstrap';

export const Registration = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <SignUp />;
    </Container>
  );
};
