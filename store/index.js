import axios from 'axios'

export const state = () => ({
  pro: [],
  art: [],
  gallery: []
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch(
      "SET",
      await axios.get("https://hq.studio-scale.com/wp-json/hq/v1/front")
    );
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
         }
       };
