import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

export const Header = () => {
  return (
    <div className="header">
      <Container className="d-flex align-items-center justify-content-between p-2">
        <div>
          <span className="header-logo fs-3">Like Netflix</span>
        </div>
        <div>
          <Link className="started-link" to={routes.login}>
            <Button type="button" className="bnt btn-danger fw-bold ">
              Sign In
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
