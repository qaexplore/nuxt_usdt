let state = () => ({
  userInfo: null,
  wallet: {},
  walletAsset: {}
})

let mutations = {
  SET_WALLETASSET(state, data) {
    state.walletAsset = data
  },
  SET_WALLET(state, data) {
    state.wallet = data
  },
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  state,
  mutations
}
