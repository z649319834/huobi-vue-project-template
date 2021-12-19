import Vue from 'vue'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en', // 定义默认语言
  messages: {
    en: require('./en-US'),
  },
})
