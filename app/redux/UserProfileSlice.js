import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';
import { selectAccessToken } from './AuthentificationSlice'; // Supposant que vous avez un slice pour gérer l'authentification

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = selectAccessToken(getState());
      const response = await axios.get(
        "https://lowpriceclone.euleukcommunication.sn/api/auth/user-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du profil utilisateur :",
        error
      );
      Alert.alert(
        "Erreur",
        "Erreur lors de la récupération des informations du profil utilisateur"
      );
      return rejectWithValue(error.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userProfile: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUserProfile: (state) => {
      state.userProfile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserProfile } = userProfileSlice.actions;

export const selectUserProfile = (state) => state.userProfile.userProfile;
export const selectUserProfileLoading = (state) => state.userProfile.loading;
export const selectUserProfileError = (state) => state.userProfile.error;

export default userProfileSlice.reducer;