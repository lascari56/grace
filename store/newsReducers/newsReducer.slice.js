import {createSlice} from '@reduxjs/toolkit';
import {getNews} from './newsReducer.thunk';

const initialState = {
  news: {}
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.fulfilled]: (state, {payload}) => {
      state.news = payload;
    }
  },
});

export const {} = newsSlice.actions;
export default newsSlice;
