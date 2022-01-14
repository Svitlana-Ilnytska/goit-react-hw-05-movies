import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviePreview from "../components/MoviePreview/MoviePreview";

import * as api from "../services/api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchMoviesById = () => {
    setLoader(true);

    api
      .fetchMoviesById(movieId)
      .then((movie) => setMovie(movie))

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
      {movie && <MoviePreview movie={movie} />}
    </>
  );
}
