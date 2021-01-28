
const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  userId: state => state.user.userId,
  roles: state => state.user.roles,
  menus: state => state.user.menus,
  indexPath: state => state.user.indexPath
}
export default getters
