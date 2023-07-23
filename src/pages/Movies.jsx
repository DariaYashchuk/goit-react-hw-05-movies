import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    // useEffect
  }, []);
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul></ul>
    </div>
  );
};
export default Movies;
