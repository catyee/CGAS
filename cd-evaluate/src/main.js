import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import './permission' // permission control
import './flexible.js'
import { HappyScroll } from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
import filters from '@/utils/filter.js'
import directives from '@/utils/directive.js'

import htmlToPdf from '@/utils/htmlToPdf'
// 此部分引入的是我们所编写的mockjs文档
// import './mock'
// 使用Vue.use()方法就会调用工具方法中的install方法
process.env.VUE_APP_MOCK && require('./mock')
console.log(process.env.VUE_APP_MOCK, 66666666666)
Vue.use(htmlToPdf)
// 自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
// 注入全局指令
Object.keys(directives).forEach(item => {
  Vue.directive(item, directives[item])
})

Vue.config.productionTip = false
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
