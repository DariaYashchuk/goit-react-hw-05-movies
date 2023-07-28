import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieDetails } from 'services/movies-service';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const { data } = await getMovieDetails(movieId);

        const names = data.genres.map(genre => genre.name);

        const { id, title, popularity, overview, poster_path } = data;

        setMovieDetails({
          id,
          title,
          popularity,
          overview,
          names,
          poster_path,
        });
      } catch {
        alert('error');
      } finally {
      }
    }
    getMovieInfo();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div>
          <div>
            <Link to={backLinkLocation.current}>Go Back</Link>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt=""
            width="300px"
          />
          <h1>{movieDetails.title}</h1>
          <p>User score: {movieDetails.popularity}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movieDetails.names &&
              movieDetails.names.map(name => <li key={name}>{name}</li>)}
          </ul>
          <h2>Additinal information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
