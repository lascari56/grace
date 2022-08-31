import {createSlice} from '@reduxjs/toolkit';

import {getLocation} from './commonReducer.thunk';

const initialState = {
  units: {
    speed: "miles"
  },

  location: null
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    saveUnits: (state, {payload}) => {
      state.units = {
        ...state.units,
        [payload.key]: payload.value
      };
    },
    clean: state => {
      state.units = initialState.units;
      state.location = initialState.location;
    },
  },
  extraReducers: {
    [getLocation.fulfilled]: (state, {payload}) => {
      state.location = payload;
    },
  },
});

export const {clean, saveUnits} = commonSlice.actions;
export default commonSlice;
