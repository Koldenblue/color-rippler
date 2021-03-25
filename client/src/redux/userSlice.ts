import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null
  },
  reducers: {
    loggedInUser: (state: any, action) => {
      console.log(action.payload)
      state.currentUser = action.payload;
    }
  }
});

export const selectLoggedInUser = (state: any) => state.user.currentUser;

export const { loggedInUser } = userSlice.actions

export default userSlice.reducer;