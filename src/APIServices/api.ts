import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchShops = () => api.get('/shops');
export const fetchShopDetails = (id: number) => api.get(`/shops/${id}`);
export const createShop = (shop: any) => api.post('/shops', shop);
export const updateShop = (id: number, shop: any) => api.put(`/shops/${id}`, shop);
export const deleteShop = (id: number) => api.delete(`/shops/${id}`);