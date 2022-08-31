import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api.util';

export const getNews = createAsyncThunk(
  'getNews',
  async (body, {rejectWithValue, getState}) => {
    try {
      return await api.service('news').find({
        query: {
          $sort: {
            date: -1
          },
          $limit: 20,
        }
      });
    } catch (err) {
      console.log("err", err);
      return rejectWithValue(err);
    }
  },
);
