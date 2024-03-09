import { createSlice } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
export const loggedUserActions = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
