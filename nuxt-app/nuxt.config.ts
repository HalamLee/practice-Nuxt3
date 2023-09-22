// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
