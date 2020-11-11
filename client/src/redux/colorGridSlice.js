import { createSlice } from '@reduxjs/toolkit';

export const colorGridSlice = createSlice({
  name: 'colorGrid',
  initialState: {
    colorGrid: []
  },
  reducers: {
    setColorGrid: (state, action) => {
      state.colorGrid = action.payload;
    }
  }
})

export const selectColorGrid = state => state.colorGrid.colorGrid;

export const { setColorGrid } = colorGridSlice.actions;

export default colorGridSlice.reducer;