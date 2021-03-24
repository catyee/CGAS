import { constantRoutes } from '@/router'
import { evaluator, adminRoutes, primaryRoutes } from '@/roleRoutes/routes'
const permission = {
  state: {
    routes: [],
    addRoutes: [],
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      // 整合现有路由和请求到的路由
      state.routes = constantRoutes.concat(routes)
    },
    SET_SIDEBAR_ROUTERS: (state, routers) => {
      state.sidebarRouters = constantRoutes.concat(routers)
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes ({ commit }, role) {
      return new Promise(resolve => {
        let routes
        // 民政局
        if (role[0] === 'admin') {
          routes = adminRoutes
          // 评估机构
        } else if (role[0] === 'common') {
          routes = evaluator
          // 基层用户
        } else if (role[0] === 'pg') {
          routes = primaryRoutes
        }
        commit('SET_ROUTES', routes)
        commit('SET_SIDEBAR_ROUTERS', routes)
        resolve(routes)
        // 向后端请求路由数据
        // getRouters().then(res => {
        //   const sdata = JSON.parse(JSON.stringify(res.data))
        //   const rdata = JSON.parse(JSON.stringify(res.data))
        //   const sidebarRoutes = filterAsyncRouter(sdata)
        //   const rewriteRoutes = filterAsyncRouter(rdata, true)
        //   rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
        //   console.log(rewriteRoutes, sidebarRoutes, 'kkkkkkkkkkkkkkkk')
        //   commit('SET_ROUTES', rewriteRoutes)
        //   commit('SET_SIDEBAR_ROUTERS', sidebarRoutes)
        //   resolve(rewriteRoutes)
        // })
      })
    }
  }
}
export default permission
