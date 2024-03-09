import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-store";
import loggedUserReducer from "./logged-user";
const store = configureStore({
  reducer: {
    post: postReducer,
    loggedUser: loggedUserReducer,
  },
});
export default store;
