import {createSelector} from 'reselect';

const newsSelector = store => store.news;

export const selectNews = createSelector(newsSelector, ({news}) => news);