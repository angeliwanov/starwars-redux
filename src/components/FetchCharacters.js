import { useState } from 'react';
import { fetchCharactersFromApi } from '../store/charactersSlice';
import { useDispatch } from 'react-redux';

export const FetchCharacters = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCharactersFromApi(value));
    setValue('');
  };

  return (
    <form className="FetchCharacters" onSubmit={handleSubmit}>
      <label>Type ' / ' and click 'Submit' to see the characters</label>
      <input
        onChange={handleChange}
        placeholder="Search Here"
        type="search"
        value={value}
      />
      <input type="submit" disabled={!value} />
    </form>
  );
};

export default FetchCharacters;
