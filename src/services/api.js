import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskService = {
  async getTasks() {
    const response = await api.get('/tasks');
    return response;
  },

  async createTask(payload) {
    const response = await api.post('/tasks', payload);
    return response;
  },

  async updateTask(id, payload) {
    const response = await api.put(`/tasks/${id}`, payload);
    return response;
  },

  async deleteTask(id) {
    const response = await api.delete(`/tasks/${id}`);
    return response;
  },
};
