import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/main',
    main: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    redirect: '/main/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index')
      },
      {
        path: 'video-list',
        name: 'video-list',
        component: () => import(/* webpackChunkName: "video-list" */ '../views/video-list')
      },
      {
        path: 'cooperation',
        name: 'cooperation',
        component: () => import(/* webpackChunkName: "cooperation" */ '../views/cooperation')
      },
      {
        path: 'suggest',
        name: 'suggest',
        component: () => import(/* webpackChunkName: "suggest" */ '../views/suggest')
      },
      {
        path: 'administrator',
        name: 'administrator',
        component: () => import(/* webpackChunkName: "administrator" */ '../views/administrator')
      },
      {
        path: 'reset-pwd',
        name: 'reset-pwd',
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/reset-pwd')
      },
      {
        path: 'tag-list',
        name: 'tag-list',
        component: () => import(/* webpackChunkName: "tag-list" */ '../views/tag-list')
      },
      {
        path: 'relation-list',
        name: 'relation-list',
        component: () => import(/* webpackChunkName: "relation-list" */ '../views/relation-list')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import(/* webpackChunkName: "video" */ '../views/video')
      },
      {
        path: 'add-video',
        name: 'video',
        component: () => import(/* webpackChunkName: "add-video" */ '../views/add-video')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
