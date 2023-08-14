import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/movies-service';
import {
  Reviews,
  OneReview,
  Author,
  Content,
  NoReviews,
} from './Reviews.styled';
import { BiUser } from 'react-icons/bi';
import { BsEmojiFrown } from 'react-icons/bs';

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
      <Reviews>
        {reviews.length === 0 ? (
          <NoReviews>
            <BsEmojiFrown />
            <p>No reviews</p>
          </NoReviews>
        ) : (
          reviews.map(({ author, content, id }) => (
            <OneReview key={id}>
              <Author>
                <BiUser />
                {author}
              </Author>
              <Content>{content}</Content>
            </OneReview>
          ))
        )}
      </Reviews>
    </div>
  );
};

export default Cast;
