import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Base URL for Flask API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get all resources
export const getResources = async () => {
  try {
    const response = await api.get('/resources');
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

// Function to add a new resource
export const addResource = async (resource) => {
  try {
    const response = await api.post('/resources', resource);
    return response.data;
  } catch (error) {
    console.error('Error adding resource:', error);
    throw error;
  }
};
