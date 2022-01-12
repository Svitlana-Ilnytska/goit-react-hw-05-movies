import React from "react";

// import './BookPreview.scss';

const MoviePreview = ({ imgUrl, title }) => (
  <div>
    <div>
      <img src={imgUrl} alt={title} />
    </div>
    <div>
      <h5>{title}</h5>
    </div>
  </div>
);

export default MoviePreview;
