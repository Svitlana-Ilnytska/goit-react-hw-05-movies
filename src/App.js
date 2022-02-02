import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Spiner from "./components/Spiner/Spiner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

export default function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
