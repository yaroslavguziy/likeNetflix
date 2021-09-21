import { useQueryClient } from 'react-query';
import { USER_KEY } from 'constants/query';

export const useUser = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(USER_KEY);
};
