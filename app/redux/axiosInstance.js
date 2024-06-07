// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lowpriceclone.euleukcommunication.sn/api',
});

export default axiosInstance;