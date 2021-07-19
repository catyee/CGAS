import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import menuhandle from './modules/menuhandle'
import permission from './modules/permission'
import getters from './getter'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission,
    menuhandle
  },
  getters
})

export default store
