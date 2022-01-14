import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage/MoviesPage";

import "./App.css";

export default function App() {
  return (
    <div>
      <Navigation />

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
      </Switch>
    </div>
  );
}
