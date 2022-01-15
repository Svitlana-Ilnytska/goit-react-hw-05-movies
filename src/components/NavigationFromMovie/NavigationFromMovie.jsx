import React from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

import css from "./NavigationFromMovie.module.css";

export default function NavigationFromMovie() {
  const { url } = useRouteMatch();
  const { location } = useLocation();
  return (
    <div className={css.movieDetails}>
      <div className={css.detailsNav}>
        <h3>Additional information</h3>
        <nav className={css.secondaryNav}>
          <NavLink
            exact
            to={{ pathname: `${url}/cast`, state: { ...location } }}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            exact
            to={{ pathname: `${url}/reviews`, state: { ...location } }}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Reviews
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
