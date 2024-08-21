import axios from "axios";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const API_URL = "https://bloomly.onrender.com";

export const actions = {
  async fetchAllUsers({ commit }) {
    try {
      const { data } = await axios.get(`${API_URL}/api/users`);
      const { results, msg } = data;
      if (results) {
        commit("setUsers", results);
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async fetchUserByID({ commit }, id) {
    try {
      const { data } = await axios.get(`${API_URL}/api/users/${id}`);
      const { result, msg } = data;
      if (result) {
        commit("setUser", result);
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async registerUser({ dispatch }, payload) {
    try {
      const { data } = await axios.post(`${API_URL}/api/users/register`, payload);
      const { msg, token } = data;
      if (token) {
        dispatch("fetchAllUsers");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        router.push({ name: "login" });
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async updateUser({ dispatch }, payload) {
    try {
      const { data } = await axios.patch(`${API_URL}/api/users/${payload.userID}`, payload);
      const { msg, err } = data;
      if (msg) {
        dispatch("fetchAllUsers");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        toast.error(`${err}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async deleteUser({ dispatch }, id) {
    try {
      const { data } = await axios.delete(`${API_URL}/api/users/${id}`);
      const { msg, err } = data;
      if (msg) {
        dispatch("fetchAllUsers");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        toast.error(`${err}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async fetchAllProducts({ commit }) {
    try {
      const { data } = await axios.get(`${API_URL}/api/shop/products`);
      const { results } = data;
      if (results) {
        commit("setProducts", results);
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async recentProducts({ commit }) {
    try {
      const { data } = await axios.get(`${API_URL}/api/product/recent`);
      const { results, msg } = data;
      if (results) {
        commit("setRecentProducts", results);
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async fetchProduct({ commit }, id) {
    try {
      const { data } = await axios.get(`${API_URL}/api/product/${id}`);
      const { result, msg } = data;
      if (result) {
        commit("setProduct", result);
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async addAProduct({ dispatch }, payload) {
    try {
      const { data } = await axios.post(`${API_URL}/api/product/add`, payload);
      const { msg } = data;
      if (msg) {
        dispatch("fetchAllProducts");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async updateProduct({ dispatch }, payload) {
    try {
      const { data } = await axios.patch(`${API_URL}/api/product/${payload.productID}`, payload);
      const { msg } = data;
      if (msg) {
        dispatch("fetchAllProducts");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },

  async deleteProduct({ dispatch }, id) {
    try {
      const { data } = await axios.delete(`${API_URL}/api/product/${id}`);
      const { msg } = data;
      if (msg) {
        dispatch("fetchAllProducts");
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  },
};
