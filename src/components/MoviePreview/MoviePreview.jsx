import React from "react";
import { NavLink } from "react-router-dom";

import css from "./MoviePreview.module.css";

export default function MoviePreview({ movie }) {
  const photo = "https://image.tmdb.org/t/p/w500";
  const { title, poster_path, overview, genres, release_date, vote_average } =
    movie;

  return (
    <div className={css.moviePreview}>
      <button type="button" className={css.button}>
        Go back
      </button>
      <div className={css.movie}>
        <div>
          <img
            src={`${photo}${poster_path}`}
            alt={title}
            className={css.image}
          />
        </div>
        <div className={css.movieOverview}>
          <h2>
            {title} {""}
            {release_date ? (
              <span>({release_date.substring(0, 4)})</span>
            ) : (
              <span>¯\_(ツ)_/¯</span>
            )}
          </h2>
          <span>User score: {vote_average && vote_average * 10} % </span>
          <h3>Overview</h3>
          <p>{overview}</p>
          <div className={css.movieDetails}>
            <div>
              <h3>Genres</h3>
              {genres && (
                <ul className={css.list}>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={css.detailsNav}>
              <h3>Additional information</h3>
              <nav className={css.secondaryNav}>
                <NavLink
                  exact
                  to="/movies/:movieId/cast"
                  className={css.link}
                  activeClassName={css.activeLink}
                >
                  Cast
                </NavLink>
                <NavLink
                  exact
                  to="/movies/:movieId/reviews"
                  className={css.link}
                  activeClassName={css.activeLink}
                >
                  Reviews
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
