
export const evaluator = [
  {
    path: '',
    // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    // redirect: 'noredirect',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    hidden: false,
    meta: { title: '', icon: '' },
    redirect: 'evaluate-list',
    children: [
      // 评估列表
      {
        path: 'evaluate-list',
        name: 'evaluate-list',
        hidden: false,
        meta: { title: '评估管理', icon: 'iconevaluate' },
        component: () => import(/* webpackChunkName: "evaluate-list" */ '../views/evaluate-list')
      },
      {
        path: 'evaluate-history',
        name: 'evaluate-history',
        hidden: true,
        meta: { title: '评估历史', icon: '' },
        component: () => import(/* webpackChunkName: "evaluate-history" */ '../views/evaluate-list')
      },
      {
        path: 'evaluate/:id',
        name: 'evaluate',
        hidden: true,
        component: () => import(/* webpackChunkName: "evaluate" */ '../views/evaluate')
      }
    ]
  },
  {
    path: '/user',
    meta: { title: '管理员管理', icon: 'iconuser-admin' },
    hidden: false,
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      {
        path: 'reset-pwd',
        name: 'reset-pwd',
        meta: { title: '修改密码', icon: 'iconuser-admin' },
        hidden: false,
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/reset-pwd')
      }
    ]
  },
  {
    path: '',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    hidden: false,
    meta: { title: '', icon: '' },
    redirect: 'register-list',
    children: [
      // 评估列表
      {
        path: 'register-list',
        name: 'register-list',
        hidden: false,
        meta: { title: '登记列表', icon: 'iconregister' },
        component: () => import(/* webpackChunkName: "evaluate-list" */ '../views/register-list')
      },
      {
        path: 'register/:id?',
        name: 'register',
        hidden: true,
        meta: { title: '登记', icon: '' },
        component: () => import(/* webpackChunkName: "evaluate-list" */ '../views/register')
      }
    ]

  }

]
export const adminRoutes = [
  {
    path: '/video',
    // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    // redirect: 'noredirect',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    hidden: false,
    meta: { title: '视频管理', icon: 'iconvideo-normal' },
    children: [
      // 视频列表
      {
        path: 'video-list',
        name: 'video-list',
        hidden: false,
        meta: { title: '视频列表', icon: '' },
        component: () => import(/* webpackChunkName: "video-list" */ '../views/video-list')
      },
      // 查看视频
      {
        path: 'video/:id',
        name: 'video',
        hidden: true,
        component: () => import(/* webpackChunkName: "video" */ '../views/video')
      },
      // 编辑新增视频
      {
        path: 'add-video/:id?',
        name: 'video',
        hidden: false,
        meta: { title: '上传视频', icon: '' },
        component: () => import(/* webpackChunkName: "add-video" */ '../views/add-video')
      }
    ]
  },
  {
    path: '/relation',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    hidden: false,
    meta: { title: '关系管理', icon: 'iconrelation-normal' },
    children: [
      {
        path: 'tag-list',
        name: 'tag-list',
        hidden: false,
        meta: { title: '标签管理', icon: '' },
        component: () => import(/* webpackChunkName: "tag-list" */ '../views/tag-list')
      },
      {
        path: 'relation-list',
        name: 'relation-list',
        hidden: false,
        meta: { title: '管理关系', icon: '' },
        component: () => import(/* webpackChunkName: "relation-list" */ '../views/relation-list')
      },
      {
        path: 'relation-chart',
        name: 'relation-chart',
        hidden: true,
        component: () => import(/* webpackChunkName: "relation-chart" */ '../views/relation-chart')
      }
    ]
  },
  {
    path: '/msg',
    hidden: false,
    meta: { title: '信息管理', icon: 'iconmessage-normal' },
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [{
      path: 'cooperation',
      name: 'cooperation',
      hidden: false,
      meta: { title: '合作洽谈', icon: '' },
      component: () => import(/* webpackChunkName: "cooperation" */ '../views/cooperation')
    },
    {
      path: 'suggest',
      name: 'suggest',
      hidden: false,
      meta: { title: '意见反馈', icon: '' },
      component: () => import(/* webpackChunkName: "suggest" */ '../views/suggest')
    }]
  },
  {
    path: '/user',
    meta: { title: '管理员管理', icon: 'iconuser-normal' },
    hidden: false,
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      // 普通管理员没有权限
      // {
      //   path: 'administrator',
      //   name: 'administrator',
      //   hidden: false,
      //   meta: { title: '管理员列表', icon: '' },
      //   component: () => import(/* webpackChunkName: "administrator" */ '../views/administrator')
      // },
      {
        path: 'reset-pwd',
        name: 'reset-pwd',
        meta: { title: '修改密码', icon: 'iconuser-normal' },
        hidden: false,
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/reset-pwd')
      }
    ]
  }

]
