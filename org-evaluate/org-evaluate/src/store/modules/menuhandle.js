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
    changeFullStatus ({ commit }, isFull) {
      const status = isFull
      commit('SET_SCREEN', status)
    }
  }
}
export default menuhandle
