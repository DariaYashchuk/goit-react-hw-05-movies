import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieDetails } from 'services/movies-service';
import {
  Section,
  Button,
  GoBackButton,
  FilmImage,
  FilmSection,
  FilmInfoSection,
  FilmTitle,
  Title,
  Details,
  ForFlex,
  Genres,
  InfoButtons,
} from './MoviePage.styled';

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

        const { id, title, vote_average, overview, poster_path } = data;

        setMovieDetails({
          id,
          title,
          vote_average: Number(vote_average).toFixed(1),
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
        <Section>
          <GoBackButton to={backLinkLocation.current}>Go Back</GoBackButton>
          <FilmSection>
            <FilmImage
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt=""
            />
            <FilmInfoSection>
              <FilmTitle>{movieDetails.title}</FilmTitle>
              <Details>User score: {movieDetails.vote_average}</Details>
              <ForFlex>
                <Title>Overview</Title>
                <Details>{movieDetails.overview}</Details>
              </ForFlex>
              <ForFlex>
                <Title>Genres</Title>
                <Details>
                  <Genres>
                    {movieDetails.names &&
                      movieDetails.names.map(name => (
                        <li key={name}>{name}</li>
                      ))}
                  </Genres>
                </Details>
              </ForFlex>
            </FilmInfoSection>
          </FilmSection>
          <Title>Additinal information</Title>
          <InfoButtons>
            <li>
              <Button to="cast">Cast</Button>
            </li>
            <li>
              <Button to="reviews">Reviews</Button>
            </li>
          </InfoButtons>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Section>
      )}
    </div>
  );
};

export default MoviePage;
