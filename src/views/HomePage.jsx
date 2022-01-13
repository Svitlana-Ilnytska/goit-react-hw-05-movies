import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import * as api from "../services/api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = () => {
    setLoader(true);

    api
      .fetchMovies()
      .then(({ results }) => setMovies(results))

      .catch((error) => {
        // toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {error && (
        <p className="notification">Sorry. Something is wrong ¯\_(ツ)_/¯</p>
      )}
      {loader && <p>Загрузка...</p>}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
