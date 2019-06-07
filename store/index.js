import axios from "axios";

export const state = () => ({
  pro: [],
  art: [],
  gallery: [],
  landing: null
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("SET", await axios.get("https://leoseyers.com/api"));
  },
  SET({ commit }, data) {
    commit("set", data.data);
  }
};

export const mutations = {
  set(state, data) {
    state.pro = data.pro;
    state.art = data.art;
    state.gallery = data.gallery;
    state.landing = data.landing;
  }
};

export const getters = {
  pro(state) {
    return state.pro;
  },
  art(state) {
    return state.art;
  },
  gallery(state) {
    return state.gallery;
  },
  landing(state) {
    return state.landing;
  }
};
