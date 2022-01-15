import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import * as api from "../../services/api";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import Spiner from "../../components/Spiner/Spiner";
import NavigationFromMovie from "../../components/NavigationFromMovie/NavigationFromMovie";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { path } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const fetchMoviesById = () => {
    setLoader(true);

    api
      .fetchMoviesById(movieId)
      .then((movie) => setMovie(movie))

      .catch((error) => {
        toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  const handleGoBack = () => {
    history.push(location?.state?.from || "/movies");
  };

  return (
    <>
      {error && (
        <p className={css.notification}>Sorry. Something is wrong ¯\_(ツ)_/¯</p>
      )}
      {loader && <Spiner />}
      {movie && (
        <div className={css.moviePreview}>
          <button type="button" className={css.button} onClick={handleGoBack}>
            Go back
          </button>
        </div>
      )}
      {movie && <MoviePreview movie={movie} />}
      {movie && <NavigationFromMovie />}

      <Switch>
        <Route path={`${path}/cast`} exact>
          <Cast />
        </Route>

        <Route path={`${path}/reviews`} exact>
          <Reviews />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}
