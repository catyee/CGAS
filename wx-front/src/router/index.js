import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'video-list',
    meta: { title: '养老照料', keepAlive: false },
   // component: () => import(/* webpackChunkName: "video" */ '../views/video')
    component: () =>  import(/* webpackChunkName: "video-list" */ '../views/video-list')
  },
  {
    //path: '/video/:id',
    path: '/video/:id',
    name: 'video',
    meta: { title: '', keepAlive: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "video" */ '../views/video')
  },
  {
    //path: '/video/:id',
    path: '/cooperation',
    name: 'cooperation',
    meta: { title: '合作洽谈', keepAlive: false },
    component: () => import(/* webpackChunkName: "video" */ '../views/cooperation')
  },
  {
    //path: '/video/:id',
    path: '/suggest',
    name: 'suggest',
    meta: { title: '意见反馈', keepAlive: false },
    component: () => import(/* webpackChunkName: "video" */ '../views/suggest')
  }
]

const router = new VueRouter({
  routes
})

export default router
