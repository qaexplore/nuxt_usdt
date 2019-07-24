const state = () => ({
  locales: ['cn', 'en', 'ja', 'ko', 'ru'],
  locale: 'cn',
  domain: null,
  carrucy_id: null,
  regularList: [],
  swapList: []
})

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_DOMAIN(state, domain) {
    state.domain = domain;
  },
  SET_CARRUCY_ID(state, id) {
    state.carrucy_id = id;
  },
  SET_REGULAR_LIST(state, list) {
    state.regularList = list
  },
  SET_SWAP_LIST(state, list) {
    state.swapList = list
  }
}

const actions = {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    commit('SET_DOMAIN', req.headers.host)
  }
}


export default {
  state,
  mutations,
  actions
}
