const state = () => ({
  locales: ['cn', 'en', 'ja', 'ko', 'ru'],
  locale: 'cn',
  domain: null,
  carrucy_id: null
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
