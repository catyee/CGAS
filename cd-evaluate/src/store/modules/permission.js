import { constantRoutes } from '@/router';
import { evaluator } from '@/roleRoutes/routes';

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    sidebarRouters: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      // 整合现有路由和请求到的路由
      state.routes = constantRoutes.concat(routes);
    },
    SET_SIDEBAR_ROUTERS: (state, routers) => {
      // state.sidebarRouters = constantRoutes.concat(routers);
      state.sidebarRouters = routers.concat(constantRoutes);
    },
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise((resolve) => {
        let routes = [];
        // if (role[0] === 'admin') {
        //   routes = superAdminRoutes;
        // } else {
        //   routes = adminRoutes;
        // }
        routes = evaluator;
        commit('SET_ROUTES', routes);
        commit('SET_SIDEBAR_ROUTERS', routes);
        console.log(routes, '000000000000');
        resolve(routes);
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
      });
    },
  },
};
export default permission;
