import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import {useSelector, useDispatch} from 'react-redux';

import {selectUser} from '@store/authReducers/authReducer.selector';

const ContainerAuthContainer = ({ children }) => {
  const router = useRouter();

  const user = useSelector(selectUser);

  const pathIsProtected = useMemo(() => {
    const notProtected = ['/'];

    console.log("router.pathname", router.pathname);
    // return router.pathname?.indexOf("cabinet") !== - 1

    return notProtected.indexOf(router.pathname) === -1
  }, [router.pathname])

  // const pathIsAdmin = useMemo(() => {
  //   return router.pathname?.indexOf("admin") !== - 1
  // }, [router.pathname])

  // const isNeedRedirect = useMemo(() => {
  //   if (((pathIsAdmin || pathIsProtected) && !user) || pathIsAdmin && user?.role !== "admin" || !pathIsAdmin && !pathIsProtected && user) {
  //     return true
  //   }

  //   return false
  // }, [])

  useEffect(() => {
    if ((pathIsProtected) && !user) {
      router.push('/');
    } else if (!pathIsProtected && user) {
      router.push('/dashboard');
    }
  }, [pathIsProtected, user])


  // if (isNeedRedirect) {
  //   return;
  // }
  
  return (
    children
  );
}

export default ContainerAuthContainer;
