// addressesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/addresse/getUserAddress', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.addresses;
    } catch (error) {
      console.error("Erreur lors de la récupération des adresses :", error);
      return rejectWithValue(error.message);
    }
  }
);

export const addAddress = createAsyncThunk(
  'addresses/addAddress',
  async ({ token, newAddress }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/addresse/store', newAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'adresse :", error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateAddress = createAsyncThunk(
  'addresses/updateAddress',
  async ({ token, id, updatedAddress }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/addresse/update/${id}`, updatedAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'adresse :", error);
      return rejectWithValue(error.message);
    }
  }
);

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    addresses: [],
    loading: false,
    error: null,
    isLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        const updatedIndex = state.addresses.findIndex(address => address.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.addresses[updatedIndex] = action.payload;
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addressesSlice.reducer;