/*
* webpack入口文件
* */
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
/* 引入路由 */
import router from './router'
// 引入vuex管理状态插件
import store from './store'
import 'mint-ui/lib/style.css'
import AlertTip from './components/AlertTip/AlertTip.vue'
import './mock/mockServer.js'
Vue.use(MintUi)
// 将弹出框AlertTip注册为全局组件
Vue.component('AlertTip', AlertTip)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
