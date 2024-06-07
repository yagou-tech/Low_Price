// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthentificationSlice';
import addressesReducer from './addressesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    addresses: addressesReducer,
  },
});

export default store;