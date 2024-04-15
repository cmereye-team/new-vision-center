import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import cn from '../locales/cn.json'
import hk from '../locales/hk.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'hk',
    messages: {
      en, 
      cn, 
      hk 
    }
  })

  vueApp.use(i18n)
})