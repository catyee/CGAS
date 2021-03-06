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
    path: '/related',
    name: 'related',
    meta: { title: '全部视频', keepAlive: false },
    component: () =>  import(/* webpackChunkName: "video-list" */ '../views/related-video')
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
    path: '/suggest',
    name: 'suggest',
    meta: { title: '意见反馈', keepAlive: false },
    component: () => import(/* webpackChunkName: "video" */ '../views/suggest')
  }
]
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  routes
})

export default router
