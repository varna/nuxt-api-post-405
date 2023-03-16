// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': '*' } },
  },
});
