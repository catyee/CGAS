import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

export const constantRoutes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   redirect: '/login'
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   hidden: true,
  //   component: () => import(/* webpackChunkName: "login" */ '../views/login'),
  // },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '../views/error/401.vue'),
    hidden: true,
  },
  // 首页
  // {
  //   path: '',
  //   main: 'main',
  //   component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
  //   redirect: 'index',
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'index',
  //       hidden: false,
  //       component: () => import(/* webpackChunkName: "index" */ '../views/index'),
  //       meta: { title: '首页', icon: 'iconindex-normal', noCache: true },
  //     },
  //   ],
  // },
  // { path: '*', component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue') },
];

const router = new VueRouter({
  // mode: 'history', // 去掉url中的#
  routes: constantRoutes,
});

export default router;
