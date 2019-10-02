import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store(store)
}
