import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
    loggedIn: false,
    user: ''
  },
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    }
  }
});

export const selectLoggedIn = state => state.user.loggedIn;

export const { logIn } = userSlice.actions

export default userSlice.reducer;