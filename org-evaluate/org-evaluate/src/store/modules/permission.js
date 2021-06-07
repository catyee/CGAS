import { constantRoutes } from '@/router'
import { orgRoutes } from '@/roleRoutes'
const permission = {
  state: {
    routes: [],
    // addRoutes: []
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
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
        let routes = []
        routes = orgRoutes
        commit('SET_ROUTES', routes)
        commit('SET_SIDEBAR_ROUTERS', routes)
        resolve(routes)
      })
    }
  }
}
export default permission
