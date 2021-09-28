import { useQuery } from 'react-query';
import { USER_KEY } from 'constants/query';

export const useUser = () => useQuery(USER_KEY);
