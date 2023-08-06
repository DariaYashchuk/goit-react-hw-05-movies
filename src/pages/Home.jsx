import { AiFillHeart } from 'react-icons/ai';

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
  Section,
  FilmDescWrap,
  Date,
} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function addTrendingMovies() {
      try {
        const { data } = await getTrending();

        const formatedReleaseDate = date => {
          return date.slice(0, 4);
        };

        const formatedTrendingMovies = data.results.map(
          ({ id, title, poster_path, release_date }) => ({
            id,
            title,
            poster_path,
            date: formatedReleaseDate(release_date),
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
    <Section>
      <Title>
        The Most Trending Now{' '}
        <svg
          width="32"
          height="25"
          viewBox="0 0 32 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Ellipse 3"
            d="M32 1.78619C32 5.92832 11.6421 24.7862 7.5 24.7862C3.35786 24.7862 0 21.4283 0 17.2862C0 13.1441 7.85786 6.78619 12 6.78619C21.5 1.28618 32 -2.35595 32 1.78619Z"
            fill="#053BA3"
          />
        </svg>
      </Title>
      <Films>
        {trendingMovies.map(({ id, title, poster_path, date }) => (
          <FilmCard key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            />
            <FilmDescWrap>
              <AiFillHeart />
              <FilmTitle>{title}</FilmTitle>
              <Date>{date}</Date>

              <StyledLink to={`movies/${id}`} state={{ from: location }}>
                More info
              </StyledLink>
            </FilmDescWrap>
          </FilmCard>
        ))}
      </Films>
    </Section>
  );
};
export default Home;
