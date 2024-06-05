// AuthentificationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (email, password) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('https://lowpriceclone.euleukcommunication.sn/api/auth/login', { email, password });
    await AsyncStorage.setItem('token', response.data.access_token);
    dispatch(loginSuccess(response.data.user));
    return response.data.user;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Une erreur est survenue';
    dispatch(loginFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

export const performLogout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch(logout());
};

export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectLoading = state => state.auth.loading;

export default authSlice.reducer;