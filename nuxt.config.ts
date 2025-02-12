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
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      // 指定要加载的字体家族及其变体
      'Noto+Sans+HK': true,  // 示例：加载Roboto字体的300、400、500权重
      'ABeeZee': true
    },
    download: true, // 将字体下载到本地，并且打包到项目里，防止用户访问不了google字体服务器
    base64: false, // 不要使用 base64格式，不然首页下载文件会非常大
    overwriting: true,
    outputDir: 'assets/fonts'
  },

  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-MM2653X',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        devtools: true,
      },
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hk.cmervision.com/',
    }
  },
  i18n: {
    vuei18n: './plugins/i18n.ts'
  },

  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no',
      },
    ],
  },

  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'hk',
      fallbackLocale: 'zh-hk',
      availableLocales: ['hk', 'cn', 'en'],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    },
    devProxy: {
      "/dingtalk": {
        target: 'https://oapi.dingtalk.com',
        prependPath: true,
        changeOrigin: true,
      },
      "/dingtalk2": {
        target: 'https://connector.dingtalk.com',
        prependPath: true,
        changeOrigin: true,
      },
      '/send': {
        target: 'https://3473.push.ft07.com',
        prependPath: true,
        changeOrigin: true,
      }
    }
  },
  elementPlus: { /** Options */ },
  compatibilityDate: '2024-08-16'
})