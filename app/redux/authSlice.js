import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    accessToken: null,
    // Autres états d'authentification...
  };

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      loading: false,
      error: null,
      isAuthenticated: false,
    },
    reducers: {
      logout: (state) => {
        state.user = null;
        state.accessToken = null;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Login cases
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Signup cases
        .addCase(signup.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signup.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(signup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { logout, clearError } = authSlice.actions;