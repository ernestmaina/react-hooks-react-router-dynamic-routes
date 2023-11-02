import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MovieList";
import MovieShow from "./MovieShow"; // Import the MovieShow component

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;



