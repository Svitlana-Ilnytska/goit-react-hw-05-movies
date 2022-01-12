const API_KEY = "e8ad9fce8be376ae39b35f64abca58d4";
const BASE_URL = "https://api.themoviedb.org";

export function fetchMovies() {
  return fetch(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export function fetchMoviesById(movieId) {
  return fetch(
    `${BASE_URL}/3/find/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

const api = {
  fetchMovies,
  fetchMoviesById,
};

export default api;
