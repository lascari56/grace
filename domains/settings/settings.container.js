import React, {useState, useMemo, useEffect} from 'react';

import SettingsView from "./settings.view"

import {useDispatch, useSelector} from 'react-redux';

import {selectUser} from '@store/authReducers/authReducer.selector';

import {saveUser, saveToken} from '@store/authReducers/authReducer.slice';

const SettingsContainer = ({...props}) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <SettingsView
      {...props}
      user={user}
    />
  );
}

export default SettingsContainer;
