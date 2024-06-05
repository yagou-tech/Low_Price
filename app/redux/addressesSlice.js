import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async (_, { getState }) => {
    const { addresses } = getState().addresses;
    if (addresses.length > 0) return addresses;

    const token = await AsyncStorage.getItem("authToken");
    if (!token) throw new Error("Aucun token trouvé");

    const response = await fetch("https://lowpriceclone.euleukcommunication.sn/api/addresse/getUserAddress", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des adresses");
    }

    const data = await response.json();
    return data.addresses;
  }
);

export const addAddress = createAsyncThunk(
  'addresses/addAddress',
  async (address) => {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) throw new Error("Aucun token trouvé");

    const response = await fetch("https://lowpriceclone.euleukcommunication.sn/api/addresse/store", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(address)
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'ajout de l'adresse");
    }

    const data = await response.json();
    return data.addresses;
  }
);

export const updateAddress = createAsyncThunk(
  'addresses/updateAddress',
  async ({ id, updatedAddress }) => {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) throw new Error("Aucun token trouvé");

    const response = await fetch(`https://lowpriceclone.euleukcommunication.sn/api/addresse/update/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedAddress)
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour de l'adresse");
    }

    const data = await response.json();
    return data.addresses;
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
        state.error = action.error.message;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses = action.payload;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.addresses = action.payload;
      });
  },
});

export default addressesSlice.reducer;
