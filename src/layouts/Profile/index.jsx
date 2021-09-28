import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/auth';
import { routes } from 'constants/routes';

export const Profile = () => {
  const { user } = useAuth();

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="w-50">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email:</strong> {user.email}
          <Link to={routes.updateProfile} className="btn btn-danger w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
