import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();
  return (
    <ul className={css.list_link}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.link}>
          <Link to={`${url}movies/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
