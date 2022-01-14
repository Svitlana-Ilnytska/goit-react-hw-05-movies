import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();
  return (
    <ul>
      {movies.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link to={`${url}movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
