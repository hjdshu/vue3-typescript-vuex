import { createStore } from 'vuex'

const initState: StoreInit.State = {
  count: 1
}

export default createStore({
  state: initState,
  mutations: {
    addCount (state) {
      state.count ++
    },
    reduceCount (state) {
      state.count --
    }
  },
  actions: {
    addCountPlay ({ commit }) {
      commit('addCount')
    }
  },
  modules: {
  }
})
