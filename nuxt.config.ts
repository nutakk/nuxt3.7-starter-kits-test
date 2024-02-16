// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite';

export default defineNuxtConfig({
  ssr: false, 
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in' // default
    },
    head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1',
        title: 'Demo',
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
      }
  },
  build: {
    transpile: ['element-plus/es'],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    plugins: [
      ElementPlus(),
    ],
  },
  components: true,
  devtools: {
    // Enable devtools (default: true)
    enabled: false,

    // VS Code Server options
    // ...other options
    vscode: {
      enabled: true,
      startOnBoot: true,
      port: 3000,
      reuseExistingServer: true,
      mode: 'local-serve',
    },

    timeline: {
      enabled: true,
    },
  },
})
