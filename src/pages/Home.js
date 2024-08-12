import { useEffect, useState } from "react";
import React from "react";

function Home() {

  const movies = [...]; 

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
