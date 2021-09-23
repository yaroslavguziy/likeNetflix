import { tvMazeApi } from 'utils/api';

export const getEntitiesAPI = () => tvMazeApi.get('/shows').then(({ data }) => data);
