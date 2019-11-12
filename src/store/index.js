import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  state: { // 自己定义的数据
    count: 10
  },
  mutations: { // 如果想修改state内的数据必须要借助mutations
    increment(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  }
})

export default store
