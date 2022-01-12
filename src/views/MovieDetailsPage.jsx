import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link, useRouteMatch } from "react-router-dom";
import * as api from "../services/api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.fetchMoviesById().then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={movie.imgUrl} alt={movie.title} />
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genre}</p>
        </>
      )}
      ;
    </>
  );
}
