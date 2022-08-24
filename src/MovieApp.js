import { useState, useEffect } from 'react';
import Movie from './components/Movie';

export default function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(json);
  };
  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
