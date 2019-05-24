import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
        front: {
            pro: [],
            art: []
        },
     
    },

    actions: {

      async nuxtServerInit({
        dispatch
      }) {
        await dispatch('FETCH_FRONT', await axios.get('https://hq.studio-scale.com/wp-json/hq/v1/front'))
    
      },

      FETCH_FRONT: ({
        commit
      }, data) => {
        commit('fetchFront', data.data)
      }

    },
    mutations: {
      fetchFront(state, data) {
        state.front.pro = data.pro
        state.front.art = data.art 
      },
    }
  })
}

export default createStore
