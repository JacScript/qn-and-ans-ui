import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./UserSlice"; // Import your user slice


const store = configureStore({
  reducer: {
    user: userReducer, // Add your user slice to the store
  }
});

export default store;
