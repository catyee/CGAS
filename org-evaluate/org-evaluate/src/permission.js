import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/auth-redirect']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else if (store.getters.roles.length === 0) {
      // 判断当前用户是否已拉取完userinfo的信息
      store.dispatch('GetInfo').then(res => {
        const { roles } = res
        store.dispatch('GenerateRoutes', roles).then((accessRoutes) => {
          router.addRoutes(accessRoutes) // 动态添加可访问路由表
          if (to.name === 'auth') {
            to = accessRoutes && accessRoutes[0] && accessRoutes[0].children[0]
          }
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        })
        next()
      }).catch((err) => {
        store.dispatch('LogOut').then(() => {
          Message.error(err)
          next({ path: '/' })
        })
      })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
