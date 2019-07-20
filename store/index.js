const state = () => ({
  locales: ['cn', 'en'],
  locale: 'cn'
})

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}


export default {
  state,
  mutations
}
