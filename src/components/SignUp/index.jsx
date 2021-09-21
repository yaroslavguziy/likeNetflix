import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signUp } from 'db/auth.js';

export const SignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit(signUp)}>
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register('email', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register('password', {
                  required: true,
                })}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};
