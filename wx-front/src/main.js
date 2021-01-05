import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

import './JS/plugin'
import './JS/FastClick'
import filters from './JS/filter'
import utils from './JS/utils'
Vue.use(utils)
// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // const userInfo = sessionStorage.getItem('userInfo') || null
  // if (!userInfo && to.meta.auth) {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
