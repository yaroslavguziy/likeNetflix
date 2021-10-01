import React from 'react';
import { Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';
import { useAuth } from 'hooks/auth';
import { Search } from 'components/Search';

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="header">
      <Container fluid className="d-flex align-items-center justify-content-between p-2">
        <div className="header-right">
          <span className="header-logo ">Netflix</span>
        </div>
        {user ? (
          <Nav className="align-items-center">
            <Link className="header-link nav-link fw-bold " to={routes.profile}>
              Profile
            </Link>
            <Link className="header-link nav-link fw-bold " to={routes.shows}>
              Shows
            </Link>
            <NavDropdown className="mobile-menu" title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="mobile-link nav-link fw-bold " to={routes.profile}>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="mobile-link nav-link fw-bold " to={routes.shows}>
                  Shows
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}

        <div className="d-flex header-left">
          {user && <Search />}
          {user ? (
            <Button onClick={signOut} type="button" className=" btn-signout btn-danger fw-bold px-1 w-50">
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
