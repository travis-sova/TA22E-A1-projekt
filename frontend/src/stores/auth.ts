import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/main';

interface User {
  id: number;
  username: string;
  email: string;
  fname: string;
  sname: string;
  perms: number;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.perms === 1
  },

  actions: {
    async login(username: string, password: string) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:3000/api/users/login', {
          username,
          password
        });

        this.token = response.data.token;
        this.user = response.data.user;

        // Store token in localStorage
        if (this.token) {
          localStorage.setItem('token', this.token);
        }

        const redirectPath = this.isAdmin ? '/admin' : '/';
        router.push(redirectPath);

      } catch (error) {
        this.error = axios.isAxiosError(error)
          ? error.response?.data?.error || 'Login failed'
          : 'Login failed';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async register(userData: {
      username: string;
      password: string;
      email: string;
      fname: string;
      sname: string;
      number?: string;
      dob?: string;
      sex?: string;
    }) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:3000/api/users/register', userData);

        this.token = response.data.token;
        this.user = response.data.user;
        if (this.token) {
          localStorage.setItem('token', this.token);
        }


        router.push('/');

      } catch (error) {
        this.error = axios.isAxiosError(error)
          ? error.response?.data?.error || 'Registration failed'
          : 'Registration failed';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchUser() {
      if (!this.token) return;

      try {
        const response = await axios.get('http://localhost:3000/api/users/me', {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        this.user = response.data;
      } catch {
        this.logout();
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
      router.push('/');
    }
  }
});
