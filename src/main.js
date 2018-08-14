import Vue from 'vue'
import App from './App.vue'
import store from './vuex/index'

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
console.log(vm)
