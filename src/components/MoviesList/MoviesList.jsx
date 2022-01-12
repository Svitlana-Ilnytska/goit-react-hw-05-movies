import React from "react";
import { Link, withRouter } from "react-router-dom";
// import MoviePreview from '../MoviePreview/MoviePreview';

// import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link to={{ pathname: `/movie/${id}` }}>
            {/* <MoviePreview imgUrl={imgUrl} title={title} /> */}
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);
