import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import 'lib-flexible/flexible.js'
import { HappyScroll } from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
import filters from '@/utils/dateUtil.js'
// 自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

Vue.config.productionTip = false
Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
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
