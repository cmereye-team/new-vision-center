/*
 * @Author: 谭洁莹
 * @Date: 2025-10-11 14:01:45
 * @LastEditTime: 2026-07-28 10:33:27
 * @FilePath: /nuxt.config.ts
 * @Description: 
 */
// https://nuxt.com/docs/api/configuration/nuxt-confi

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  devServer: {
    port: 3015,
  },
  // routeRules: {
    
  //   "/": { 
  //     redirect: "/v2/",
  //   },
  //   "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult": { 
  //     redirect: "/v2/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
  //   },
  //   "/about-us/contact-us": { 
  //     redirect: "/v2/about-us/contact-us",
  //   },
  //   "/about-us/news-information": { redirect: "/v2/about-us/news-information" },
  // },
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

  modules: ['@element-plus/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxtjs/tailwindcss'],
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
      siteUrl: 'https://www.cmervision.com/',
    }
  },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no',
      },
    ],
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