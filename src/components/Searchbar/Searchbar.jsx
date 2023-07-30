import { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [inputData, setInputSearch] = useState('');

  const onChangeInput = e => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputData);
    reset();
  };

  const reset = () => {
    setInputSearch('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="inputData"
          value={inputData}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
