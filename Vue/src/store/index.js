import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  description: {},
  count: 0
}

const getters = {
  getCount: state => {
    return state.count
  }
}

const mutations = {
  increment (state) {
    console.log('state', state.count)
    state.count++
  },
  saveData (state, data) {
    state.description = data
    console.log('data in the store youhou', data)
  }
}

const actions = {
  increment (context) {
    context.commit('increment')
  },
  callApi (context, data) {
    context.commit('saveData', data)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
