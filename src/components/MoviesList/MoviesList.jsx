import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import MoviePreview from '../MoviePreview/MoviePreview';

// import css from './MoviesList.module.css';

export default function  MoviesList ({ movies }) {
  const { url } = useRouteMatch();
  return (
    <ul>
          {movies.map(({ id, imgUrl, title }) => (
            <li key={id}>
              <Link to={`${url}movies/${id}`}>
                {/* <MoviePreview imgUrl={imgUrl} title={title} /> */}
                {title}
              </Link>
            </li>
          ))}
        </ul>
  );
};

