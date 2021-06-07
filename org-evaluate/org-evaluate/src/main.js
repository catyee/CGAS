import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './permission' // permission control
import './flexible'
import { HappyScroll } from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
import filters from '@/utils/filter.js'
Vue.config.productionTip = false
Vue.component('happy-scroll', HappyScroll)
// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success', duration: 1000 })
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
