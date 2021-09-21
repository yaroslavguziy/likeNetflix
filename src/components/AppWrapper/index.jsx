import { useAuth } from 'hooks/auth';

export const AppWrapper = ({ children }) => {
  const { isLoading } = useAuth();
  return !isLoading ? children : null;
};
