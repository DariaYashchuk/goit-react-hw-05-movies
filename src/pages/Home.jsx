import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as MoviesService from 'services/movies-service';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function addTrendingMovies() {
      try {
        const { data } = await MoviesService.getTrending();
        console.log(data);

        const formatedTrendingMovies = data.results.map(({ id, title }) => ({
          id,
          title,
        }));

        // setTrendingMovies(prevTrendingMovies => [
        //   ...prevTrendingMovies,
        //   ...formatedTrendingMovies,
        // ]);
        setTrendingMovies(formatedTrendingMovies);
      } catch {
        // alert('error');
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
            <Link>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
