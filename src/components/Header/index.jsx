import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';
import { useAuth } from 'hooks/auth';

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="header">
      <Container fluid className="d-flex align-items-center justify-content-between p-2">
        <div>
          <span className="header-logo fs-3">Like Netflix</span>
        </div>
        <div>
          {user ? (
            <Button onClick={signOut} type="button" className="bnt btn-danger fw-bold ">
              Sign Out
            </Button>
          ) : (
            <Link className="started-link bnt btn-danger fw-bold py-2 px-3" to={routes.login}>
              Sign In
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};
