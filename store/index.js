const state = () => ({
  locales: ['cn', 'en', 'ja', 'ko', 'ru'],
  locale: 'cn',
  domain: null
})

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_DOMAIN(state, domain) {
    state.domain = domain;
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
