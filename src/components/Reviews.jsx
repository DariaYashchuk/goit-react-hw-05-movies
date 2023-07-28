import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/movies-service';

const Cast = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviewsInfo() {
      try {
        const {
          data: { results },
        } = await getMovieReviews(movieId);
        const formatedReviews = results.map(({ author, content, id }) => ({
          author,
          content,
          id,
        }));

        setReviews(formatedReviews);
      } catch {
        alert('error');
      } finally {
      }
    }
    getReviewsInfo();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.length === 0 ? (
          <div>Here are no reviews</div>
        ) : (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
