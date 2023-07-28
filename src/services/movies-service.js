import axios from 'axios';

// const API_KEY = 'ad2942746ddd0723e99c6245fd903bed';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU';

export const getTrending = async () => {
  const response = await axios.get('/trending/movie/day');
  return response;
};

export const getMovie = async (query, page) => {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response;
};

export const getMovieDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}`);
  return response;
};

export const getMovieCredits = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/credits`);
  return response;
};

export const getMovieReviews = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/reviews`);
  return response;
};
