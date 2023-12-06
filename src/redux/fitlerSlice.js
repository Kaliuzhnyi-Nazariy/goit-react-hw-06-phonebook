import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,

  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;
