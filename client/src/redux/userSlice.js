import { createSlice } from '@reduxjs/toolkit';
export var userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null
    },
    reducers: {
        loggedInUser: function (state, action) {
            console.log(action.payload);
            state.currentUser = action.payload;
        }
    }
});
export var selectLoggedInUser = function (state) { return state.user.currentUser; };
export var loggedInUser = userSlice.actions.loggedInUser;
export default userSlice.reducer;
