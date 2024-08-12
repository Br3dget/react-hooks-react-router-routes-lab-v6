import { useEffect, useState } from "react";
import React from "react";

function Actors() {
  const actors = [...]; 

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
