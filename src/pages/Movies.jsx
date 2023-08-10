import { useEffect, useState } from 'react';
import * as MoviesService from 'services/movies-service';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import {
  Section,
  FilmCard,
  Films,
  FilmDescWrap,
  FilmTitle,
  Image,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function addFilteredMovies() {
      try {
        const { data } = await MoviesService.getMovie(query, page);

        if (data.total_results === 0) {
          alert('No movies');
          return;
        }

        const formatedFilteredMovies = data.results.map(
          ({ id, title, poster_path }) => ({
            id,
            title,
            poster_path,
          })
        );

        setFilteredMovies(prevFilteredMovies => [
          ...prevFilteredMovies,
          ...formatedFilteredMovies,
        ]);
        setIsLoadMoreBtnVisible(page !== data.total_pages);
      } catch {
        alert('error');
      } finally {
      }
    }
    if (query) {
      addFilteredMovies();
    }
  }, [query, page]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setFilteredMovies([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Section>
      <SearchBar onSubmit={handleFormSubmit} />

      <Films>
        {filteredMovies.map(({ id, title, poster_path }) => (
          <FilmCard key={id}>
            <Link to={`${id}`} id={id} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <FilmDescWrap>
                <FilmTitle>{title}</FilmTitle>
              </FilmDescWrap>
            </Link>
          </FilmCard>
        ))}
      </Films>
      {isLoadMoreBtnVisible && <button onClick={onLoadMore}>Load more</button>}
    </Section>
  );
};
export default Movies;
