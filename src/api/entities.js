import { tvMazeApi } from 'utils/api';

export const getEntitiesAPI = async () => await tvMazeApi.get('/shows').then(({ data }) => data);

export const getEntityAPI = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;

  return await tvMazeApi.get(`/shows/${id}`).then(({ data }) => data);
};

export const getSearchEntitiesAPI = async ({ queryKey }) => {
  const [_key, { query }] = queryKey;

  return await tvMazeApi.get(`/search/shows?q=${query}`).then(({ data }) => data);
};
