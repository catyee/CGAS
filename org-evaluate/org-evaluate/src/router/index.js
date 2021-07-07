import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [

  // auth页面 因为每次退出登录之后 切换角色重新登录 会跳转到path '',此时路由会受上一次的影响，会redirect上次的‘’对应的地址(路由多个角色都有一个‘’路由对应不同的路由跳转)
  // 没有想到更好的办法 因此加了一个默认的‘’这样每次都跳转到auth，然后如果是要跳转到auth则在permission里面更改beforeEach中的to，让其直接跳转到根据角色获取到的路由链接
  {
    path: '',
    name: 'auth',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    redirect: 'auth',
    hidden: true,
    children: [
      {
        path: 'auth',
        name: 'auth',
        hidden: true,
        component: () => import(/* webpackChunkName: "index" */ '../views/auth.vue'),
        meta: { title: '', icon: '', noCache: true }
      }
    ]
  },
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
  base: '/org',
  routes: constantRoutes,
  mode: 'history' // 去掉url中的#
})

export default router
