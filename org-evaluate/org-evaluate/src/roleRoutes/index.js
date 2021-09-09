// 民政局
export const orgRoutes = [
  {
    path: '',
    meta: { title: '检查列表', icon: '' },
    hidden: false,
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      {
        path: 'project-list',
        name: 'project-list',
        meta: { title: '检查列表', icon: 'iconevaluate' },
        hidden: false,
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/project-list')
      },
      {
        path: 'check/:checkid?',
        name: 'check',
        meta: { title: '检查', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "check" */ '../views/check')
      },
      {
        path: 'check-show/:checkid',
        name: 'check-show',
        meta: { title: '检查', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "check-show" */ '../views/check-show')
      },
      {
        path: 'final-list',
        name: 'final-list',
        meta: { title: '汇总表', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "final-list" */ '../views/final-list')
      }
    ]
  },
  {
    path: '',
    meta: { title: '管理员管理', icon: '' },
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
    meta: { title: '负责专员列表', icon: '' },
    redirect: 'primary-user',
    children: [
      // 评估列表
      {
        path: 'primary-user',
        name: 'primary-user',
        hidden: false,
        meta: { title: '负责专员列表', icon: 'iconuser-admin' },
        component: () => import(/* webpackChunkName: "primary-user" */ '../views/primary-user')
      }
    ]

  }

]
// 检查人员
export const primaryRoutes = [
  {
    path: '',
    meta: { title: '检查列表', icon: '' },
    hidden: false,
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      {
        path: 'project-list',
        name: 'project-list',
        meta: { title: '检查列表', icon: 'iconevaluate' },
        hidden: false,
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/project-list')
      },
      {
        path: 'check/:checkid?',
        name: 'check',
        meta: { title: '评估', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "check" */ '../views/check')
      },
      {
        path: 'check-show/:checkid',
        name: 'check-show',
        meta: { title: '检查', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "check-show" */ '../views/check-show')
      },
      {
        path: 'final-list',
        name: 'final-list',
        meta: { title: '汇总表', icon: 'iconevaluate' },
        hidden: true,
        component: () => import(/* webpackChunkName: "final-list" */ '../views/final-list')
      }
    ]
  }
]
