
const superAdminRoutes = [
  {
    path: '',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    redirect: 'index',
    hidden: false, // 当前
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index')
      }

    ]
  },

  {
    path: '/video',
    // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    // redirect: 'noredirect',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      // 视频列表
      {
        path: 'video-list',
        name: 'video-list',
        component: () => import(/* webpackChunkName: "video-list" */ '../views/video-list')
      },
      // 查看视频
      {
        path: 'video/:id',
        name: 'video',
        component: () => import(/* webpackChunkName: "video" */ '../views/video')
      },
      // 编辑新增视频
      {
        path: 'add-video/:id?',
        name: 'video',
        component: () => import(/* webpackChunkName: "add-video" */ '../views/add-video')
      }
    ]
  },
  {
    path: '/msg',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    chidren: [{
      path: 'cooperation',
      name: 'cooperation',
      component: () => import(/* webpackChunkName: "cooperation" */ '../views/cooperation')
    },
    {
      path: 'suggest',
      name: 'suggest',
      component: () => import(/* webpackChunkName: "suggest" */ '../views/suggest')
    }]
  },
  {
    path: 'user',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      {
        path: 'administrator',
        name: 'administrator',
        component: () => import(/* webpackChunkName: "administrator" */ '../views/administrator')
      },
      {
        path: 'reset-pwd',
        name: 'reset-pwd',
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/reset-pwd')
      }
    ]
  },
  {
    path: 'relation',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
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
        path: 'relation-chart',
        name: 'relation-chart',
        component: () => import(/* webpackChunkName: relation-chart" */ '../views/relation-chart')
      }
    ]
  }
]

export default {
  superAdminRoutes
  // adminRoutes
}
