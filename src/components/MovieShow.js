import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();

  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId, 10));

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>Director: {selectedMovie.director}</p>
      <p>Genre: {selectedMovie.genre}</p>
      <p>Release Year: {selectedMovie.releaseYear}</p>
    </div>
  );
}

export default MovieShow;
