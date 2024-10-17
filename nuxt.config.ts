// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    'scss': resolve(__dirname, './assets/scss'),
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          quietDeps: true
        }
      }
    }
  }
})
