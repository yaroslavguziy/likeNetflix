import React from 'react';

import { useAuth } from 'hooks/auth';

export const Profile = () => {
  const { user } = useAuth();
  return <div>{user.email}</div>;
};
