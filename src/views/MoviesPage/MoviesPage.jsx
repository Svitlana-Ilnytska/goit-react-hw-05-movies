import React, { useState, useEffect } from "react";
import * as api from "../../services/api";
import Searchbar from "../../components/Searchbar/Searchbar";
import MoviesList from "../../components/MoviesList/MoviesList";
import Spiner from "../../components/Spiner/Spiner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesBySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onSearchQuery = (query) => {
    setMovies([]);
    setQuery(query);
  };

  const fetchMoviesBySearch = () => {
    setLoader(true);

    api
      .fetchMoviesBySearch(query)
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
      {loader && <Spiner />}
      {<Searchbar onSubmit={onSearchQuery} />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
