import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const API_URL = "https://bloomly.onrender.com";

export default {
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

  async fetchAllProducts({ commit }) {
    try {
      const { data } = await axios.get(`${API_URL}/api/shop/products`);
      const { results } = data;
      if (results) {
        commit("setProducts", results);
      } else {
        toast.error("No products found", {
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
      const { results, msg } = await (await axios.get(`${API_URL}/api/shop/products/${id}`)).data;
      if (results) {
        commit("setProduct", results);
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
      const { data } = await axios.post(
        `${API_URL}/api/shop/products/add`,
        payload
      );
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
      const { data } = await axios.patch(
        `${API_URL}/api/shop/products/${payload.productID}`,
        payload
      );
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
      const { data } = await axios.delete(`${API_URL}/api/shop/products/${id}`);
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
