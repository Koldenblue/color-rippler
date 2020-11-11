import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false
  },
  reducers: {
    loggedInUser: (state, action) => {
      console.log(action.payload)
      state.currentUser = action.payload;
    }
  }
});

export const selectLoggedInUser = state => state.user.loggedIn;

export const { loggedInUser } = userSlice.actions

export default userSlice.reducer;