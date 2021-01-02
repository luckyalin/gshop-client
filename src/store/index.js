// 使用vuex管理状态
// 引入vuex相关js
import state from './state.js'
import setters from './setters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  setters,
  actions,
  mutations
})
