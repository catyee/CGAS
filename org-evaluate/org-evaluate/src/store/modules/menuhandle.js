const menuhandle = {
  state: {
    isFullScreen: false
  },
  mutations: {
    SET_SCREEN: (state, status) => {
      state.isFullScreen = status
    }
  },
  actions: {
    changeFullStatus ({ commit, state }) {
      const status = !state.isFullScreen
      commit('SET_SCREEN', status)
    }
  }
}
export default menuhandle
