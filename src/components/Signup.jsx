import React from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from 'db/auth.js';

import { Button } from 'react-bootstrap';

export const Signup = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Button>123</Button>
    </>
  );
};
