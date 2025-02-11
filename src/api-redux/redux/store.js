import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./sersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
