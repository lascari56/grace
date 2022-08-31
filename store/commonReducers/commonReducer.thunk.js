import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api.util';

import axios from "axios"

export const getLocation = createAsyncThunk(
  'getLocation',
  async (body, {rejectWithValue, getState}) => {
    try {
      const {data} = await axios.get(`https://extreme-ip-lookup.com/json/?key=DGGNSMTry28Mg7RbwMbe`);

      // console.log(data?.countryCode?.toLowerCase())

      return {...data, countryCode: data?.countryCode?.toUpperCase()}
      // ?.countryCode?.toLowerCase();
    } catch (err) {
      console.log("err_getLocation". err)
      return rejectWithValue(err);
    }
  },
);