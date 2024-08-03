import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import your user slice
import questionReducer from "./QuestionSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Add your user slice to the store
    questions: questionReducer,
  },
});

export default store;
