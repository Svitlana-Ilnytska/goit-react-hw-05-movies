import React from "react";


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
          <p className={css.overview}>{overview}</p>
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
        </div>
      </div>
    </div>
  );
}
