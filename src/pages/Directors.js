import { useEffect, useState } from "react";

function Directors() {
  const directors = [...]; 

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
export default Directors;
