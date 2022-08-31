import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';

// import {selectUser} from '@store/authReducers/authReducer.selector';

// import {getNews} from '@store/newsReducers/newsReducer.thunk';
// import {getLocation} from '@store/commonReducers/commonReducer.thunk';
import {saveUser, saveToken, logout} from '@store/authReducers/authReducer.slice';

import {selectToken} from '@store/authReducers/authReducer.selector';

import {api} from '@utils/api.util';

// import { useRouter } from 'next/router'

const ContainerRootView = ({children}) => {
  // const router = useRouter()

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  useEffect(() => {
    api.reAuthenticate().then((res) => {
      dispatch(saveUser(res.user))
    }).catch(() => {
      dispatch(logout())
    });

    // dispatch(getLocation())
  }, [])

  // useEffect(() => {
  //   if (token) dispatch(getNews())
  // }, [token])

  return (
    children
  );
}

export default ContainerRootView;
