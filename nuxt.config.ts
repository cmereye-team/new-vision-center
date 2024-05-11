// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  devServer: {
    port: 3015,
  },
  build: { 
    transpile: ['vue-i18n'] 
  }, 
  vite: { 
    plugins: [ 
      VueI18nVitePlugin({ 
        include: [ 
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json') 
        ] 
      }) 
    ] 
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n:{
    vuei18n:'./plugins/i18n.ts'
  },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'hk',
      fallbackLocale: 'zh-hk',
      availableLocales: ['hk', 'cn', 'en'],
    },
  },
  elementPlus: { /** Options */ }
})
