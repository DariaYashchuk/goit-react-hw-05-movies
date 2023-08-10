import { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';

import { Input, Form, Button } from './SearchBar.styled';

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
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Search for movie"
      />

      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
