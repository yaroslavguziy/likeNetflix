import { useQuery } from 'react-query';

import { getEntitiesAPI, getEntityAPI, getSearchEntitiesAPI } from 'api/entities';

export const KEY = 'entities';

export const useEntities = () => useQuery(KEY, getEntitiesAPI);

export const useEntity = options => useQuery([KEY, options], getEntityAPI);

export const useSearchEntities = options => useQuery([KEY, options], getSearchEntitiesAPI);
