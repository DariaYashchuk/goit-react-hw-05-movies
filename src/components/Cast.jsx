import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/movies-service';

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
          img: `https://image.tmdb.org/t/p/w500${profile_path}`,
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
    <div>
      <ul>
        {castDetails &&
          castDetails.map(({ name, character, img }) => (
            <li key={name}>
              <div>
                <img src={img} alt={name} width="200px" />

                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
