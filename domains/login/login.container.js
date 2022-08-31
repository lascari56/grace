import React, {useState, useMemo, useEffect} from 'react';
import * as yup from 'yup';

import LoginView from "./login.view"

import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';

// import {selectUser} from '@store/authReducers/authReducer.selector';

import {saveUser, saveToken} from '@store/authReducers/authReducer.slice';

import {API} from '@configs/api';
import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LoginContainer = ({...props}) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  // const [notificationId, setNotificationId] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: ({email, password}) => {
      handleSend({
        strategy: 'local',
        email,
        password,
      })
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log("codeResponse", codeResponse);
      handleGoogleSend(codeResponse)
    },
    onError: () => {
      console.log('Login Failed');

      setLoading(false)

      toast.update(notificationId, { render: "Login or password is incorrect", type: "error", isLoading: false, autoClose: 2000 })
    }
  });

  const validItems = useMemo(() => {
    return {
      email: !formik.touched.email || !formik.errors.email,
      password: !formik.touched.password || !formik.errors.password,
    };
  }, [formik.touched, formik.errors, formik.values]);

  const isValid = useMemo(() => {
    let res = true;

    for (let item of Object.values(validItems)) {
      if (!item) res = false;
    }

    return res;
  }, [validItems]);

  // useEffect(() => {
  //   api.authenticate().catch((e) => {})

  //   api.on('authenticated', async loginResult => {
  //     console.log("loginResult", loginResult);

  //     await dispatch(saveToken(loginResult.accessToken));
  //     await dispatch(saveUser(loginResult.user));

  //     // router.push('/cabinet/carfax')
  //   });
  // }, []);

  const handleSend = (data) => {
    setLoading(true);

    const notificationId = toast.loading("Please wait...")
    // setNotificationId(toast.loading("Please wait..."));

    api.authenticate(data).then(async (res) => {
      await dispatch(saveToken(res.accessToken));
      await dispatch(saveUser(res.user));

      // console.log("res", res);

      toast.update(notificationId, { 
        render: "Login success", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
        onClose: () => {
          router.push('/')

          setLoading(false)
        }})
    }).catch((e) => {
      console.log("authError", e);

      setLoading(false)

      toast.update(notificationId, { render: "Login or password is incorrect", type: "error", isLoading: false, autoClose: 2000 })
    })
  };

  const handleGoogleSend = (data) => {
    handleSend({
      strategy: 'google',
      access_token: data.access_token
    })
  }

  return (
    <LoginView {...props} formik={formik} loading={loading} validItems={validItems} isValid={isValid} onLoginGoogle={googleLogin} />
  );
}

export default LoginContainer;
