// 民政局
export const orgRoutes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    hidden: false,
    meta: { title: '用户管理', icon: 'iconuser-admin' },
    redirect: 'primary-user',
    children: [
      // 评估列表
      {
        path: 'primary-user',
        name: 'primary-user',
        hidden: false,
        meta: { title: '基层用户', icon: '' },
        component: () => import(/* webpackChunkName: "primary-user" */ '../views/primary-user')
      }
    ]

  }
]
