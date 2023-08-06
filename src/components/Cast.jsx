import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/movies-service';
import { CastImage, CastInfo, OneInfo, Name } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    async function getCastInfo() {
      try {
        const {
          data: { cast },
        } = await getMovieCredits(movieId);
        const formatedCast = cast.map(({ name, character, profile_path }) => ({
          name,
          character,
          img: profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://joadre.com/wp-content/uploads/2019/02/no-image.jpg`,
        }));

        setCastDetails(formatedCast);
      } catch {
        alert('error');
      } finally {
      }
    }
    getCastInfo();
  }, [movieId]);

  return (
    <CastInfo>
      {castDetails &&
        castDetails.map(({ name, character, img }) => (
          <OneInfo key={name}>
            <CastImage src={img} alt={name} />

            <Name>{name}</Name>
            <p>{character}</p>
          </OneInfo>
        ))}
    </CastInfo>
  );
};

export default Cast;
