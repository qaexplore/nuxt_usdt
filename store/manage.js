let state = () => ({
  userInfo: null
})

let mutations = {
  SAVE_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  state,
  mutations
}
