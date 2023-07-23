import { useEffect } from 'react';
import * as MoviesService from 'services/movies-service';

const Home = () => {
  useEffect(() => {
    MoviesService.getTrending();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul></ul>
    </div>
  );
};
export default Home;
