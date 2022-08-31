import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {commonName, commonReducer} from './commonReducers';
import {authName, authReducer} from './authReducers';
import {newsName, newsReducer} from './newsReducers';

import {persistStore, persistReducer} from 'redux-persist';
import {getPersistConfig} from 'redux-deep-persist';

import storage from 'redux-persist/lib/storage'

const persistCommonConfig = getPersistConfig({
  key: 'common',
  storage,
  blacklist: [],
  rootReducer: commonReducer,
});

const persistAuthConfig = getPersistConfig({
  key: 'auth',
  storage,
  blacklist: [
    'user.loading',
    'user.error',
  ],
  rootReducer: authReducer,
});

const persistNewsConfig = getPersistConfig({
  key: 'news',
  storage,
  blacklist: [],
  rootReducer: newsReducer,
});

const rootReducer = combineReducers({
  [commonName]: persistReducer(persistCommonConfig, commonReducer),
  [authName]: persistReducer(persistAuthConfig, authReducer),
  [newsName]: persistReducer(persistNewsConfig, newsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
