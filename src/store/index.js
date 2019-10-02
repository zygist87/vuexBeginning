import Products from './modules/Products'

export default {
  modules: { Products },
  state: {
    title: 'Test',
    numbers: [1, 2, 3, 4, 5]
  },
  getters: {
    maxNumber: state => state.numbers.filter(num => num > 3)
  },
  actions: {
    addNumber ({ commit }, payload) {
      commit('setNumber', payload)
    }
  },
  mutations: {
    setNumber (state, number) {
      state.numbers = [...state.numbers, number]
    }
  }
}
