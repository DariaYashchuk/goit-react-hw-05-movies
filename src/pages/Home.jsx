import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/movies-service';
import {
  StyledLink,
  FilmCard,
  Image,
  Title,
  Films,
  FilmTitle,
} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function addTrendingMovies() {
      try {
        const { data } = await getTrending();

        const formatedTrendingMovies = data.results.map(
          ({ id, title, poster_path }) => ({
            id,
            title,
            poster_path,
          })
        );

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
      <Title>Trending today</Title>
      <Films>
        {trendingMovies.map(({ id, title, poster_path }) => (
          <FilmCard key={id}>
            <StyledLink to={`movies/${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width="50px"
                alt=""
              />
              <FilmTitle>{title}</FilmTitle>
            </StyledLink>
          </FilmCard>
        ))}
      </Films>
    </div>
  );
};
export default Home;
