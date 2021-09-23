import { useQuery } from 'react-query';
import { getEntitiesAPI } from 'api/entities';

const KEY = 'entities';

export const useEntities = () => {
  return useQuery([KEY, '/shows'], getEntitiesAPI);
};
