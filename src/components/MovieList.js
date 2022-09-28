import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, searchTitle, searchRate }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "90%",
        margin: "50px auto",
        gap: "30px",
      }}
    >
      {movies
        .filter(
          movie =>
            movie.title
              .toLowerCase()
              .includes(searchTitle.toLowerCase().trim()) &&
            movie.rate >= searchRate
        )
        .map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
