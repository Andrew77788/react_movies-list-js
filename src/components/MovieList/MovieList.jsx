import { MovieCard } from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';

import './MovieList.scss';

// export const MovieList = () => (
//   <div className="movies">
//     {moviesFromServer.map(movie => (
//       <MovieCard movie={movie} key={movie.imdbId} />
//     ))}
//   </div>
// );

// {movies.length === 0 ? <p>No movies available</p> : movies.map(movie => <MovieCard movie={movie} />)}

function MovieList() {
  if (moviesFromServer.length === 0) {
    return (<p>No movies available</p>);
  }
  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}

export { MovieList };


