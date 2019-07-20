import AccountApi from '@/assets/js/api/accountApi'

let state = () => ({
  mainAssets: null,
  detailAssets: null,
  labsAssets: {}
})

let mutations = {
  SAVE_ACCOUNT_ASSETS(state, payload) {
    state[payload.type] = payload.data
  }
}

let actions = {
  getAssetsMain({
    commit
  }) {
    return AccountApi.getAssetsMain()
      .then(res => {
        commit('SAVE_ACCOUNT_ASSETS', {
          type: 'mainAssets',
          data: res.data.assets
        })
      })
      .catch(() => {})
  },
  getAssetsDetail({
    commit
  }) {
    return AccountApi.getAssetsDetail()
      .then(res => {
        commit('SAVE_ACCOUNT_ASSETS', {
          type: 'detailAssets',
          data: res.data.assetsDetail
        })
      })
      .catch(() => {})
  },
  getAssetsLabs({
    commit
  }) {
    return AccountApi.getUserAssetsList()
      .then(res => {
        commit('SAVE_ACCOUNT_ASSETS', {
          type: 'labsAssets',
          data: res.data
        })
      })
      .catch(() => {})
  }
}

export default {
  state,
  actions,
  mutations
}
