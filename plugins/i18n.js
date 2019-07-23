import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import StCN from '@/locales/lang/cn'
import StEN from '@/locales/lang/en'
import StKO from '@/locales/lang/ko'
import StRU from '@/locales/lang/ru'

import CommonCH from '@/locales/common/cn.json'
import CommonEN from '@/locales/common/en.json'
import CommonKO from '@/locales/common/ko.json'
import CommonRU from '@/locales/common/ru.json'
import CommonJA from '@/locales/common/ja.json'

import CN from '@/locales/cn'
import EN from '@/locales/en'
import KO from '@/locales/ko'
import JA from '@/locales/ja'
import RU from '@/locales/ru'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import koLocale from 'element-ui/lib/locale/lang/ko'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
import ElementLocale from 'element-ui/lib/locale'

// 多语言配置
const messages = {
  en: {
    message: EN,
    ...StEN,
    ...CommonEN,
    ...enLocale
  },
  cn: {
    message: CN,
    ...StCN,
    ...CommonCH,
    ...zhLocale
  },
  ko: {
    message: KO,
    ...StKO,
    ...CommonKO,
    ...koLocale
  },
  ja: {
    message: JA,
    ...StCN,
    ...CommonJA,
    ...jaLocale
  },
  ru: {
    message: RU,
    ...StRU,
    ...CommonRU,
    ...ruLocale
  }
}

export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: app.$cookies.get('locale') || 'cn',
    messages: messages
  })
  store.commit("dictionary/SET_THEME", app.$cookies.get('theme'))

}
