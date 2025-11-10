import axios from 'axios';

// Toma la URL según el entorno: desarrollo o producción
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const cliente = axios.create({
  baseURL: API_URL,
  withCredentials: true, // necesario si usás cookies HttpOnly
});

export default cliente;
