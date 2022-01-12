import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

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
         asddf
        </Route>

        <Route path="/movies/:movieId" >
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}
