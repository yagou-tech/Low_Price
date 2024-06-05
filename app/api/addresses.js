import axios from 'axios';

export const fetchAddressesApi = async (token) => {
  try {
    const response = await axios.get(
      "https://lowpriceclone.euleukcommunication.sn/api/addresse/getUserAddress",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addAddressApi = async (newAddress, token) => {
  try {
    const response = await axios.post(
      "https://lowpriceclone.euleukcommunication.sn/api/addresse/store",
      newAddress,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAddressApi = async (id, updatedAddress, token) => {
  try {
    const response = await axios.put(
      `https://lowpriceclone.euleukcommunication.sn/api/addresse/update/${id}`,
      updatedAddress,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};