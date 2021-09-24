import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { routes } from 'constants/routes';
import { useAuth } from 'hooks/auth';

export const Home = () => {
  const { user } = useAuth();

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Link
        className="started-link bnt btn-danger w-100 py-3 fw-bold fs-4 text-center"
        to={user ? routes.shows : routes.registration}
      >
        Get Started
      </Link>
    </Container>
  );
};
