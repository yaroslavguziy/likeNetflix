import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from 'hooks/auth';
import { routes } from 'constants/routes';

export const ProfileUpdate = () => {
  const { user, updateEmail, updatePassword } = useAuth();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = data;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (email !== user.email) {
      updateEmail(user, email);
    }
    if (password === confirmPassword) {
      updatePassword(user, password);
    }
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="w-50">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register('email', {
                  required: true,
                })}
                defaultValue={user.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register('password')} placeholder="Leave blank to keep the same" />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                {...register('confirmPassword')}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 btn-danger mt-3" type="submit">
              Update
            </Button>

            <Link to={routes.profile}>
              <Button disabled={loading} className="w-100 btn-danger mt-3" type="submit">
                Cancel
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
