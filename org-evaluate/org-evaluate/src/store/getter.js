const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  nickName: state => state.user.nickName,
  userId: state => state.user.userId,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  sidebarRouters: state => state.permission.sidebarRouters
  // menus: state => state.user.menus
  // indexPath: state => state.user.indexPath
}
export default getters
