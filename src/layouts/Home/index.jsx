import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';
import { Button, Container } from 'react-bootstrap';

export const Home = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Link className="started-link" to={routes.registration}>
        <Button type="button" className="bnt btn-danger w-100 py-3 fw-bold fs-4">
          Get Started
        </Button>
      </Link>
    </Container>
  );
};
