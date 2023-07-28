import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'services/movies-service';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function addTrendingMovies() {
      try {
        const { data } = await getTrending();

        const formatedTrendingMovies = data.results.map(({ id, title }) => ({
          id,
          title,
        }));

        setTrendingMovies(formatedTrendingMovies);
      } catch {
        alert('error');
      } finally {
      }
    }
    addTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
