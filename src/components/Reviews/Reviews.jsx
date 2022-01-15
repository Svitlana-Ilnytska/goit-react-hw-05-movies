import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../../components/Spiner/Spiner";
import * as api from "../../services/api";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchMovieReviews = () => {
    setLoader(true);

    api
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))

      .catch((error) => {
        toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {error && (
        <p className={css.notification}>Sorry. Something is wrong ¯\_(ツ)_/¯</p>
      )}
      {loader && <Spiner />}
      {reviews.length < 0 ? (
        <div className={css.reviews}>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id} className={css.item}>
                <span>Author: {author}</span>
                <p className={css.content}> {content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ToastContainer />
    </>
  );
}
