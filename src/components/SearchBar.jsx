import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      alert('Fill in the request');
      return;
    }

    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        autoFocus
      />

      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
