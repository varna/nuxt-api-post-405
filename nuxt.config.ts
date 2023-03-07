// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    '/api/**': { cors: true },
  },
  imports: {
    dirs: ['models'],
  },
  nitro: {
    imports: {
      dirs: ['models'],
    },
  },
});
