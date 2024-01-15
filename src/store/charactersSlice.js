import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = 'https://swapi.dev/api/people/';

export const fetchCharactersFromApi = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm);
    const data = await response.json();
    return data.results;
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharactersFromApi.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
