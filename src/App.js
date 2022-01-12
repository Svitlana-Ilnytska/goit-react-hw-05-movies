import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";

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
      </Switch>
    </div>
  );
}
