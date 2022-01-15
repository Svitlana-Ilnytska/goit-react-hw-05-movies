import React, { useState, useEffect } from "react";
import * as api from "../../services/api";
import Searchbar from "../../components/Searchbar/Searchbar";
import MoviesList from "../../components/MoviesList/MoviesList";
import Spiner from "../../components/Spiner/Spiner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import css from "./MoviesPage.module.css";
import { useHistory, useLocation } from "react-router-dom";

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

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

  useEffect(() => {
    const queryBySearch = new URLSearchParams(location.search).get("query") ?? "";
    if (queryBySearch) {
      setQuery(queryBySearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchQuery = (queryBySearch) => {
    setMovies([]);
    setQuery(queryBySearch);
  };

  const fetchMoviesBySearch = () => {
    setLoader(true);

    api
      .fetchMoviesBySearch(query)
      .then(({ results }) => setMovies(results))
      .then(
        history.push({
          ...location,
          search: `query=${query}`,
        })
      )

      .catch((error) => {
        toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {error && (
        <p className={css.notification}>Sorry. Something is wrong ¯\_(ツ)_/¯</p>
      )}
      {loader && <Spiner />}
      {<Searchbar onSubmit={onSearchQuery} />}
      {movies && <MoviesList movies={movies} />}
      <ToastContainer />
    </>
  );
}
