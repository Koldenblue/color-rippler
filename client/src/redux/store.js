import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import colorGridReducer from './colorGridSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    colorGrid: colorGridReducer
  }
});
