import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  
    fetch(`/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
}
export default Movie;
