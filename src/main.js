// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import Cart from './component/Cart/cart'
import 'lib-flexible'
import './moke/mokeServer'
import './validator'
Vue.config.productionTip = false
Vue.component('Cart',Cart)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
