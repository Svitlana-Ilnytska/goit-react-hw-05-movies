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

const api = {
  fetchMovies,
};

export default api;
