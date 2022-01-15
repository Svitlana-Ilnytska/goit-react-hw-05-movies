import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list_link}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.link}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
            style={{ textDecoration: "none" }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
