import { createSlice } from '@reduxjs/toolkit';

export const colorGridSlice = createSlice({
  name: 'colorGrid',
  initialState: {
    colorGrid: [],
    gettingColor: false
  },
  reducers: {
    setColorGrid: (state, action) => {
      state.colorGrid = action.payload;
    },
    setGettingColor: (state) => {
      console.log(state)
      state.gettingColor = !state.gettingColor
    }
  }
})

export const selectColorGrid = (state) => state.colorGrid.colorGrid;
export const selectGettingColor = (state) => state.colorGrid.gettingColor;

export const { setColorGrid, setGettingColor } = colorGridSlice.actions;

export default colorGridSlice.reducer;