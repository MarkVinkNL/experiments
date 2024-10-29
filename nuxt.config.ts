// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  alias: {
    'scss': resolve(__dirname, './assets/scss'),
  },
  modules: [
    // Simple usage
    'nuxt-purgecss',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/scss/template.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
          api: "modern",
          quietDeps: true
        },
      }
    }
  }
})
