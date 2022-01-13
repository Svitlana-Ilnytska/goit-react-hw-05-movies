import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link, useRouteMatch } from "react-router-dom";
import * as apiId from "../services/api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [id, setId] = useState(null);
  const [genre, setGenre] = useState(null);
  const [overview, setOverview] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { movieId } = this.props.match.params;
    fetchMoviesById();
  }, [movieId]);

  const fetchMoviesById = () => {
    setLoader(true);

    apiId
      .fetchMoviesById()
      .then(({ movieId }) => setId({ ...movieId }))

      .catch((error) => {
        // toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {movieId && (
        <>
          <img src={imgUrl} alt={title} />
          <h2>{title}</h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genre}</p>
        </>
      )}
      ;
    </>
  );
}
