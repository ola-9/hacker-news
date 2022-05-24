import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice.js';

export default configureStore({
  reducer: {
    newsReducer,
  },
});