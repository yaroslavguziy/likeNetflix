import React from 'react';

import { SignUp } from 'components/SignUp';
import { Container } from 'react-bootstrap';

export const Registration = () => {
  return (
    <Container>
      <SignUp className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }} />;
    </Container>
  );
};
