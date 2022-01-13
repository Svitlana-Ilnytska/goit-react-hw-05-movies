import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const photo = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {error && (
        <p className="notification">Sorry. Something is wrong ¯\_(ツ)_/¯</p>
      )}
      {loader && <p>Загрузка...</p>}
      {movie && (
        <>
          <img
            src={`${photo}${movie.poster_path}`}
            alt={movie.title}
            width={250}
          />
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genre}</p>
        </>
      )}
    </>
  );
}
