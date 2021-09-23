import axios from 'axios';

const { REACT_APP_TV_MAZE_API_URL } = process.env;

export const tvMazeApi = axios.create({
  baseURL: REACT_APP_TV_MAZE_API_URL,
});
