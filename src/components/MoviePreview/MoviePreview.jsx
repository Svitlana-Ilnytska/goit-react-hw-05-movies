import React from "react";

// import css from './BookPreview.module.css';

export default function MoviePreview({ movie }) {
  const photo = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <img src={`${photo}${movie.poster_path}`} alt={movie.title} width={250} />
      <h2>{movie.title}</h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genre}</p>
    </div>
  );
}
