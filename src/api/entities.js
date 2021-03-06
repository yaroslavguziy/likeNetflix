import { tvMazeApi } from 'utils/api';
import { getUsersFavoritesData, getUsersLikesData } from 'api/users';

import { auth } from 'db/auth';

export const getEntitiesAPI = async () => {
  const { data } = await tvMazeApi.get('/shows');

  const favorites = await getUsersFavoritesData();
  const likes = await getUsersLikesData();

  const response = data.map(entity => ({
    ...entity,
    isFavorite: favorites.includes(entity.id),
    isLiked: likes[entity.id]?.includes(auth.currentUser.uid),
    likeCount: likes[entity.id]?.length || 0,
  }));

  return response;
};

export const getEntityAPI = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const { data } = await tvMazeApi.get(`/shows/${id}`);

  const favorites = await getUsersFavoritesData();
  const likes = await getUsersLikesData();

  const entity = {
    ...data,
    isFavorite: favorites.includes(+id),
    isLiked: likes[id]?.includes(auth.currentUser.uid),
    likeCount: likes[id]?.length || 0,
  };

  return entity;
};

export const getSearchEntitiesAPI = async ({ queryKey }) => {
  const [_key, { query }] = queryKey;

  return await tvMazeApi.get(`/search/shows?q=${query}`).then(({ data }) => data);
};
