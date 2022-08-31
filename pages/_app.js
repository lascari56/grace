// import '../styles/globals.scss'

// function MyApp({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page)
  
//   return getLayout((
//     <Component {...pageProps} />
//   ))
// }

// export default MyApp

import '../styles/globals.scss'
// import '../styles/old-style.scss'
// import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/react-splide/css';
// import 'react-medium-image-zoom/dist/styles.css'

import RootContainer from '../containers/root';
import AuthContainer from '../containers/auth';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Head from "next/head"

import {store, persistor} from '../store/index';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>Grace</title>
      </Head>

      <GoogleOAuthProvider clientId="274371133068-ht1ggh7hdm068gmnqsvbn6rmg8poub3i.apps.googleusercontent.com">
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            {
              getLayout((
                <RootContainer>
                  <AuthContainer>
                    <Component {...pageProps} />

                    <ToastContainer />
                  </AuthContainer>
                </RootContainer>
              ))
            }
          </Provider>
        </PersistGate>
      </GoogleOAuthProvider>
    </>
  )
}

export default MyApp
