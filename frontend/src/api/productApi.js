import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API functions
export const productApi = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  // Get single product
  getProduct: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },

  // Create new product
  createProduct: async (productData) => {
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('description', productData.description);
      formData.append('image', productData.image);

      const response = await api.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create product');
    }
  },

  // Update product
  updateProduct: async (id, productData) => {
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('description', productData.description);
      if (productData.image) {
        formData.append('image', productData.image);
      }

      const response = await api.put(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete product');
    }
  },
};

export default productApi;
