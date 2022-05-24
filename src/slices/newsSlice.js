import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState();
console.log('initialState: ', initialState);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: newsAdapter.addMany,
  }
});

export const { actions } = newsSlice;
export const selectors = newsAdapter.getSelectors((state) => state.news);
export default newsSlice.reducer;

