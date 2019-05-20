// import Vuex from 'vuex'
// import axios from 'axios'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       images: null,
//       clients: null,
//       portrait: null
//     },

//     actions: {

//       async nuxtServerInit({
//         dispatch
//       }) {
//         await dispatch('SET_API', await axios.get('https://fotoscope.studio-scale.ovh/wp-json/api/fotoscope'))
//       },

//       SET_API: ({
//         commit
//       }, data) => {
//         commit('setAPI', data.data)
//       }

//     },
//     mutations: {
//       setAPI(state, data) {
//         state.images = data.gallery
//         state.clients = data.clients
//         state.portrait = data.portrait
//       },
//     }
//   })
// }

// export default createStore
