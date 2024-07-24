import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userAction.js'; // Import your user slice
import { composeWithDevTools } from 'redux-devtools-extension';

const isDev = process.env.NODE_ENV

const store = configureStore({
  reducer: {
    user: userReducer, // Add your user slice to the store
  },
  // Enable Redux DevTools extension (adjust for production environments)
  // enhancers: isDev ? [composeWithDevTools()] : [],
});

export default store;
