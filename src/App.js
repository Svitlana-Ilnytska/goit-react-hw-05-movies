import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

import "./App.css";
console.log(process.env.REACT_APP_API_KEY)
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
