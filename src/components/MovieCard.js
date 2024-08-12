import {Link} from 'react-router-dom';
import React from "react";

function MovieCard({title}) {
  
  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;