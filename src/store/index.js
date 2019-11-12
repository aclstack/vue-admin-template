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
  mutations: { // 如果想修改state内的数据必须要借助mutations,但此方法不支持异步
    increment(state, n = 1) { // 设置默认值是ES6语法，原生JS不支持
      state.count += n
    },
    decrease(state, params) { // 对象方式定义
      state.count -= params.count
    }
  }
})

export default store
