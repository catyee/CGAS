import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  },
  { path: '*', component: (resolve) => require(['@/views/error/404'], resolve), hidden: true }
]

const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  routes: constantRoutes
})

export default router
